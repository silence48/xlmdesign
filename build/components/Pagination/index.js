import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton } from "../IconButton";
import { Icon } from "../../icons";
import "./styles.scss";
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["PREV"] = "previous";
    NavigationDirection["NEXT"] = "next";
})(NavigationDirection || (NavigationDirection = {}));
export var Pagination = function (_a) {
    var pageSize = _a.pageSize, itemCount = _a.itemCount, currentPage = _a.currentPage, setCurrentPage = _a.setCurrentPage;
    if (!pageSize || !itemCount) {
        return null;
    }
    var pageCount = Math.ceil(itemCount / pageSize);
    var isFirstPage = currentPage === 1;
    var isLastPage = currentPage === pageCount;
    var handlePageNavigation = function (direction) {
        var newPage = direction === NavigationDirection.PREV
            ? currentPage - 1
            : currentPage + 1;
        setCurrentPage(newPage);
    };
    var customProps = {
        customSize: "1rem",
        customColor: "var(--pal-text-link)",
    };
    if (pageCount === 1) {
        return null;
    }
    return (_jsxs("div", __assign({ className: "Pagination" }, { children: [_jsx(IconButton, __assign({ icon: _jsx(Icon.ChevronLeft, {}), altText: "Previous page", disabled: isFirstPage, onClick: function () { return handlePageNavigation(NavigationDirection.PREV); } }, customProps)), "".concat(currentPage, " of ").concat(pageCount), _jsx(IconButton, __assign({ icon: _jsx(Icon.ChevronRight, {}), altText: "Next page", disabled: isLastPage, onClick: function () { return handlePageNavigation(NavigationDirection.NEXT); } }, customProps))] })));
};
//# sourceMappingURL=index.js.map