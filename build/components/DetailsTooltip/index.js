import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip, TooltipPosition } from "../Tooltip";
import { IconButton } from "../IconButton";
import { Icon } from "../../icons";
import "./styles.scss";
export var DetailsTooltip = function (_a) {
    var details = _a.details, children = _a.children, isInline = _a.isInline, _b = _a.altText, altText = _b === void 0 ? "Learn more" : _b, _c = _a.tooltipPosition, tooltipPosition = _c === void 0 ? TooltipPosition.RIGHT : _c, _d = _a.customIcon, customIcon = _d === void 0 ? _jsx(Icon.Info, {}) : _d, customColor = _a.customColor, customSize = _a.customSize;
    var getExtraClasses = function () {
        var classes = [];
        if (isInline) {
            classes.push("DetailsTooltip--inline");
        }
        return classes.join(" ");
    };
    return (_jsxs("div", __assign({ className: "DetailsTooltip ".concat(getExtraClasses()) }, { children: [_jsx("div", __assign({ className: "DetailsTooltip__component" }, { children: children })), _jsx("div", __assign({ className: "DetailsTooltip__button" }, { children: _jsx(Tooltip, __assign({ content: details, position: tooltipPosition }, { children: _jsx(IconButton, { altText: altText, icon: customIcon, customSize: customSize, customColor: customColor }) })) }))] })));
};
DetailsTooltip.displayName = "DetailsTooltip";
DetailsTooltip.tooltipPosition = TooltipPosition;
//# sourceMappingURL=index.js.map