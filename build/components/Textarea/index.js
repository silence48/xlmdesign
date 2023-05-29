import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement } from "react";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";
export var Textarea = function (_a) {
    var id = _a.id, _b = _a.children, children = _b === void 0 ? "" : _b, label = _a.label, note = _a.note, error = _a.error, customTextarea = _a.customTextarea, _c = _a.spellCheck, spellCheck = _c === void 0 ? false : _c, _d = _a.autoComplete, autoComplete = _d === void 0 ? "off" : _d, props = __rest(_a, ["id", "children", "label", "note", "error", "customTextarea", "spellCheck", "autoComplete"]);
    var additionalClasses = __spreadArray(__spreadArray([], (props.disabled ? ["Textarea--disabled"] : []), true), (error ? ["Textarea--error"] : []), true).join(" ");
    var baseTextareaProps = {
        id: id,
        "aria-invalid": !!error,
    };
    return (_jsxs("div", __assign({ className: "Textarea ".concat(additionalClasses) }, { children: [label && _jsx("label", __assign({ htmlFor: id }, { children: label })), _jsx("div", __assign({ className: "Textarea__wrapper" }, { children: customTextarea ? (cloneElement(customTextarea, __assign(__assign({}, baseTextareaProps), props))) : (_jsx("textarea", __assign({}, baseTextareaProps, props, { children: children }))) })), note && _jsx(FieldNote, { children: note }), error && (_jsx(FieldNote, __assign({ variant: FieldNote.variant.error }, { children: error })))] })));
};
Textarea.displayName = "Textarea";
//# sourceMappingURL=index.js.map