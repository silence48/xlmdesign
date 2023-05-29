import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useLayoutEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";
import { chunk } from "lodash";
import { Loader } from "../Loader";
import { Pagination } from "../Pagination";
import { Icon } from "../../icons";
import { sortList } from "../../helpers/sortList";
import { SortOrder } from "../../types/types";
import "./styles.scss";
export var Table = function (_a) {
    var _b = _a.id, id = _b === void 0 ? "table" : _b, data = _a.data, columnLabels = _a.columnLabels, renderItemRow = _a.renderItemRow, breakpoint = _a.breakpoint, hideNumberColumn = _a.hideNumberColumn, isLoading = _a.isLoading, _c = _a.emptyMessage, emptyMessage = _c === void 0 ? "No data to show" : _c, pageSize = _a.pageSize;
    var _d = useSearchParams(), searchParams = _d[0], setSearchParams = _d[1];
    var pageParam = Number(searchParams.get("page")) || 1;
    var chunkData = useCallback(function (items) { return chunk(items, pageSize || items.length); }, [pageSize]);
    var _e = useState(chunkData(data)), localData = _e[0], setLocalData = _e[1];
    var _f = useState(null), currentSortKey = _f[0], setCurrentSortKey = _f[1];
    var _g = useState(null), sortOrder = _g[0], setSortOder = _g[1];
    var _h = useState(pageParam), currentPage = _h[0], setCurrentPage = _h[1];
    var isSortableTable = Boolean(columnLabels.find(function (cl) { return cl.sortBy; }));
    useLayoutEffect(function () {
        setLocalData(chunkData(data));
    }, [data, pageSize, chunkData]);
    var handleSort = function (sortKey) {
        var sortedData = data;
        var sortedKey = sortKey;
        var sortedOrder = null;
        if (currentSortKey === sortedKey) {
            if (sortOrder === SortOrder.ASC) {
                sortedOrder = SortOrder.DESC;
                sortedData = sortList(data, sortKey, SortOrder.DESC);
            }
            else {
                sortedKey = null;
            }
        }
        else {
            sortedOrder = SortOrder.ASC;
            sortedData = sortList(data, sortKey);
        }
        setCurrentSortKey(sortedKey);
        setLocalData(chunkData(sortedData));
        setSortOder(sortedOrder);
    };
    var renderSortIcon = function (sortKey) {
        if (sortKey === currentSortKey && sortOrder) {
            return (_jsx("div", __assign({ className: "SortableTable__sortableCell__icon" }, { children: sortOrder === SortOrder.ASC ? (_jsx(Icon.ChevronDown, {})) : (_jsx(Icon.ChevronUp, {})) })));
        }
        return null;
    };
    var getItemNumber = function (pgSize, currentPgIndex, itemIndex) { return currentPgIndex * pgSize + itemIndex; };
    return (_jsxs("div", __assign({ className: [
            "TableContainer",
            isLoading ? "TableContainer--loading" : "",
        ].join(" ") }, { children: [_jsxs("div", __assign({ className: "TableWrapper" }, { children: [localData.length === 0 ? _jsx("p", { children: emptyMessage }) : null, localData.length > 0 ? (_jsxs("table", __assign({ className: ["Table", isSortableTable ? "SortableTable" : ""].join(" "), "data-breakpoint": breakpoint }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [hideNumberColumn ? null : _jsx("th", { children: "#" }), columnLabels.map(function (lb) { return (_jsx("th", __assign({}, (lb.sortBy ? { onClick: function () { return handleSort(lb.id); } } : {}), { children: _jsxs("div", __assign({ className: lb.sortBy ? "SortableTable__sortableCell" : "" }, { children: [lb.label, renderSortIcon(lb.id)] })) }), lb.id)); })] }) }), _jsx("tbody", { children: localData[currentPage - 1].map(function (item, index) { return (_jsxs("tr", __assign({ className: item.href ? "Table__clickableRow" : "", onClick: function () {
                                        return item.href ? window.location.assign(item.href) : null;
                                    } }, { children: [hideNumberColumn ? null : (_jsx("td", { children: getItemNumber(pageSize || 0, currentPage - 1, index + 1) })), renderItemRow(item)] }), "".concat(id, "-row-").concat(index))); }) })] }))) : null] })), pageSize ? (_jsx(Pagination, { pageSize: pageSize, itemCount: data.length, currentPage: currentPage, setCurrentPage: function (page) {
                    setCurrentPage(page);
                    setSearchParams({ page: String(page) });
                } })) : null, isLoading ? _jsx(Loader, { size: "3rem" }) : null] })));
};
Table.displayName = "Table";
//# sourceMappingURL=index.js.map