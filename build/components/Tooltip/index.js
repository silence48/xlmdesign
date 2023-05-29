import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useLayoutEffect, useEffect, useRef, useState } from "react";
import { createPopper, preventOverflow, flip } from "@popperjs/core";
import { Icon } from "../../icons";
import "./styles.scss";
export var TooltipPosition;
(function (TooltipPosition) {
    TooltipPosition["BOTTOM"] = "bottom";
    TooltipPosition["BOTTOM_START"] = "bottom-start";
    TooltipPosition["BOTTOM_END"] = "bottom-end";
    TooltipPosition["LEFT"] = "left";
    TooltipPosition["LEFT_START"] = "left-start";
    TooltipPosition["LEFT_END"] = "left-end";
    TooltipPosition["RIGHT"] = "right";
    TooltipPosition["RIGHT_START"] = "right-start";
    TooltipPosition["RIGHT_END"] = "right-end";
    TooltipPosition["TOP"] = "top";
    TooltipPosition["TOP_START"] = "top-start";
    TooltipPosition["TOP_END"] = "top-end";
})(TooltipPosition || (TooltipPosition = {}));
export var Tooltip = function (_a) {
    var content = _a.content, children = _a.children, _b = _a.position, position = _b === void 0 ? TooltipPosition.BOTTOM : _b, isVisible = _a.isVisible, disableClick = _a.disableClick;
    var tooltipEl = useRef(null);
    var referenceEl = useRef(null);
    var _c = useState(Boolean(isVisible)), isTooltipVisible = _c[0], setIsTooltipVisible = _c[1];
    var positionTooltip = useCallback(function () {
        if ((referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.current) && (tooltipEl === null || tooltipEl === void 0 ? void 0 : tooltipEl.current)) {
            createPopper(referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.current, tooltipEl.current, {
                placement: position,
                modifiers: [
                    preventOverflow,
                    flip,
                    {
                        name: "offset",
                        options: {
                            offset: [0, 16],
                        },
                    },
                ],
            });
        }
    }, [position, referenceEl]);
    useLayoutEffect(function () {
        positionTooltip();
    }, [positionTooltip]);
    useLayoutEffect(function () {
        if (isVisible !== undefined) {
            setIsTooltipVisible(isVisible);
        }
    }, [isVisible]);
    var handleClickOutside = useCallback(function (event) {
        var _a, _b;
        if (event.target === (tooltipEl === null || tooltipEl === void 0 ? void 0 : tooltipEl.current) ||
            ((_a = tooltipEl === null || tooltipEl === void 0 ? void 0 : tooltipEl.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            return;
        }
        if (!((_b = referenceEl === null || referenceEl === void 0 ? void 0 : referenceEl.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
            setIsTooltipVisible(false);
        }
    }, []);
    useEffect(function () {
        if (!disableClick) {
            if (isTooltipVisible) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            else {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isTooltipVisible, handleClickOutside, disableClick]);
    return (_jsxs("div", __assign({ className: "Tooltip ".concat(isTooltipVisible ? "Tooltip--opened" : "") }, { children: [_jsx("div", __assign({ ref: referenceEl, className: "Tooltip__component", onClick: function () { return !disableClick && setIsTooltipVisible(!isTooltipVisible); } }, { children: children })), _jsxs("div", __assign({ ref: tooltipEl, className: "Tooltip__content", style: { visibility: isTooltipVisible ? "visible" : "hidden" } }, { children: [_jsx("div", __assign({ className: "Tooltip__content__container" }, { children: content })), _jsx("div", __assign({ "data-popper-arrow": true, className: "Tooltip__content__arrow" }, { children: _jsx(Icon.TooltipPoint, {}) }))] }))] })));
};
Tooltip.displayName = "Tooltip";
Tooltip.position = TooltipPosition;
//# sourceMappingURL=index.js.map