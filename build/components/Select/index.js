import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FieldElement } from "../utils/FieldElement";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";
import "./styles.scss";
export var Select = function (_a) {
    var id = _a.id, label = _a.label, leftElement = _a.leftElement, rightElement = _a.rightElement, note = _a.note, error = _a.error, children = _a.children, props = __rest(_a, ["id", "label", "leftElement", "rightElement", "note", "error", "children"]);
    var additionalClasses = __spreadArray(__spreadArray([], (props.disabled ? ["Select--disabled"] : []), true), (error ? ["Select--error"] : []), true).join(" ");
    return (_jsxs("div", __assign({ className: "Select ".concat(additionalClasses) }, { children: [label && _jsx("label", __assign({ htmlFor: id }, { children: label })), _jsxs("div", __assign({ className: "Select__container" }, { children: [leftElement && (_jsx(FieldElement, __assign({ position: FieldElement.position.left }, { children: leftElement }))), _jsxs("div", __assign({ className: "Select__wrapper" }, { children: [_jsx("select", __assign({ id: id }, props, { children: children })), _jsx("span", __assign({ className: "Select__icon", "aria-hidden": "true" }, { children: _jsx(Icon.ChevronDown, {}) }))] })), rightElement && (_jsx(FieldElement, __assign({ position: FieldElement.position.right }, { children: rightElement })))] })), note && _jsx(FieldNote, { children: note }), error && (_jsx(FieldNote, __assign({ variant: FieldNote.variant.error }, { children: error })))] })));
};
Select.displayName = "Select";
//# sourceMappingURL=index.js.map