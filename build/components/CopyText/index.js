import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip, TooltipPosition } from "../Tooltip";
import "./styles.scss";
export var CopyText = function (_a) {
    var textToCopy = _a.textToCopy, showTooltip = _a.showTooltip, _b = _a.doneLabel, doneLabel = _b === void 0 ? "Copied" : _b, _c = _a.tooltipPosition, tooltipPosition = _c === void 0 ? TooltipPosition.BOTTOM : _c, _d = _a.title, title = _d === void 0 ? "Copy" : _d, children = _a.children;
    var _e = useState(false), isTooltipVisible = _e[0], setIsTooltipVisible = _e[1];
    var handleCopyDone = function () {
        if (isTooltipVisible) {
            return;
        }
        setIsTooltipVisible(true);
        var t = setTimeout(function () {
            setIsTooltipVisible(false);
            clearTimeout(t);
        }, 1000);
    };
    var renderElement = function (element) {
        var label = !showTooltip && isTooltipVisible ? doneLabel : null;
        if (typeof element === "string") {
            return label !== null && label !== void 0 ? label : element;
        }
        return (_jsx(element.type, __assign({}, element.props, { children: label !== null && label !== void 0 ? label : element.props.children })));
    };
    return (_jsx("div", __assign({ className: "CopyText" }, { children: _jsx(Tooltip, __assign({ content: doneLabel, position: tooltipPosition, isVisible: showTooltip && isTooltipVisible, disableClick: true }, { children: _jsx(CopyToClipboard, __assign({ text: textToCopy, onCopy: handleCopyDone }, { children: _jsx("div", __assign({ title: title, role: "button", className: "CopyText__content" }, { children: renderElement(children) })) })) })) })));
};
CopyText.displayName = "CopyText";
CopyText.tooltipPosition = TooltipPosition;
//# sourceMappingURL=index.js.map