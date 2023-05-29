import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
var CardVariant;
(function (CardVariant) {
    CardVariant["default"] = "default";
    CardVariant["highlight"] = "highlight";
})(CardVariant || (CardVariant = {}));
export var Card = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? CardVariant.default : _b, children = _a.children, noPadding = _a.noPadding, noShadow = _a.noShadow;
    var customStyle = __assign(__assign({}, (noPadding ? { "--Card-padding": 0 } : {})), (noShadow ? { "--Card-shadow": "none" } : {}));
    return (_jsx("div", __assign({ className: "Card Card--".concat(variant), style: customStyle }, { children: children })));
};
Card.displayName = "Card";
Card.variant = CardVariant;
//# sourceMappingURL=index.js.map