import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.scss";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";
export var Checkbox = function (_a) {
    var id = _a.id, label = _a.label, note = _a.note, error = _a.error, props = __rest(_a, ["id", "label", "note", "error"]);
    var additionalClasses = __spreadArray(__spreadArray([], (props.disabled ? ["Checkbox--disabled"] : []), true), (error ? ["Checkbox--error"] : []), true).join(" ");
    return (_jsxs("div", __assign({ className: "Checkbox ".concat(additionalClasses) }, { children: [_jsxs("div", __assign({ className: "Checkbox__container" }, { children: [_jsx("input", __assign({ type: "checkbox", id: id }, props)), _jsxs("label", __assign({ htmlFor: id }, { children: [label, _jsx("span", __assign({ className: "Checkbox__icon", "aria-hidden": "true" }, { children: _jsx("span", { children: _jsx(Icon.Check, {}) }) }))] }))] })), note && _jsx(FieldNote, { children: note }), error && (_jsx(FieldNote, __assign({ variant: FieldNote.variant.error }, { children: error })))] })));
};
Checkbox.displayName = "Checkbox";
//# sourceMappingURL=index.js.map