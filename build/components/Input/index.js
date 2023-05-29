import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement } from "react";
import { FieldElement } from "../utils/FieldElement";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";
export var Input = function (_a) {
    var customInput = _a.customInput, id = _a.id, label = _a.label, leftElement = _a.leftElement, rightElement = _a.rightElement, note = _a.note, error = _a.error, props = __rest(_a, ["customInput", "id", "label", "leftElement", "rightElement", "note", "error"]);
    var additionalClasses = __spreadArray(__spreadArray([], (props.disabled ? ["Input--disabled"] : []), true), (error ? ["Input--error"] : []), true).join(" ");
    var baseInputProps = {
        id: id,
        "aria-invalid": !!error,
    };
    return (_jsxs("div", __assign({ className: "Input ".concat(additionalClasses) }, { children: [label && _jsx("label", __assign({ htmlFor: id }, { children: label })), _jsxs("div", __assign({ className: "Input__container" }, { children: [leftElement && (_jsx(FieldElement, __assign({ position: FieldElement.position.left }, { children: leftElement }))), _jsx("div", __assign({ className: "Input__wrapper" }, { children: customInput ? (cloneElement(customInput, __assign(__assign({}, baseInputProps), props))) : (_jsx("input", __assign({}, baseInputProps, props))) })), rightElement && (_jsx(FieldElement, __assign({ position: FieldElement.position.right }, { children: rightElement })))] })), note && _jsx(FieldNote, { children: note }), error && (_jsx(FieldNote, __assign({ variant: FieldNote.variant.error }, { children: error })))] })));
};
Input.displayName = "Input";
//# sourceMappingURL=index.js.map