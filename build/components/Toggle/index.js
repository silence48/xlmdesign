import { __assign, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, useEffect, useState } from "react";
import "./styles.scss";
var LabelPosition;
(function (LabelPosition) {
    LabelPosition["left"] = "left";
    LabelPosition["right"] = "right";
})(LabelPosition || (LabelPosition = {}));
export var Toggle = function (_a) {
    var id = _a.id, checked = _a.checked, customInput = _a.customInput, onChange = _a.onChange, disabled = _a.disabled, labelOn = _a.labelOn, labelOff = _a.labelOff, _b = _a.labelPosition, labelPosition = _b === void 0 ? LabelPosition.left : _b;
    var _c = useState(checked), checkedValue = _c[0], setCheckedValue = _c[1];
    useEffect(function () {
        setCheckedValue(checked);
    }, [checked]);
    var additionalClasses = __spreadArray([], (disabled ? ["Toggle--disabled"] : []), true).join(" ");
    var renderLabel = function () {
        return labelOn ? _jsx("span", { children: checked ? labelOn : labelOff !== null && labelOff !== void 0 ? labelOff : labelOn }) : null;
    };
    var baseInputProps = {
        className: "Toggle__input",
        type: "checkbox",
        name: id,
        id: id,
        disabled: disabled,
    };
    return (_jsxs("label", __assign({ className: "Toggle ".concat(additionalClasses), htmlFor: id }, { children: [customInput ? (cloneElement(customInput, __assign({}, baseInputProps))) : (_jsx("input", __assign({ checked: checkedValue, onChange: onChange }, baseInputProps))), labelPosition === LabelPosition.left ? renderLabel() : null, _jsx("div", { className: "Toggle__track" }), labelPosition === LabelPosition.right ? renderLabel() : null] })));
};
Toggle.displayName = "Toggle";
Toggle.labelPosition = LabelPosition;
//# sourceMappingURL=index.js.map