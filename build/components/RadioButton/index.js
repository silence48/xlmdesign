import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.scss";
export var RadioButton = function (_a) {
    var id = _a.id, label = _a.label, props = __rest(_a, ["id", "label"]);
    var additionalClasses = __spreadArray([], (props.disabled ? ["RadioButton--disabled"] : []), true).join(" ");
    return (_jsxs("div", __assign({ className: "RadioButton ".concat(additionalClasses) }, { children: [_jsx("input", __assign({ type: "radio", id: id }, props)), _jsxs("label", __assign({ htmlFor: id }, { children: [label, _jsx("span", __assign({ className: "RadioButton__icon", "aria-hidden": "true" }, { children: _jsx("span", {}) }))] }))] })));
};
RadioButton.displayName = "RadioButton";
//# sourceMappingURL=index.js.map