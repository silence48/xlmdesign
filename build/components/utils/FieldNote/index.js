import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
var FieldNoteVariant;
(function (FieldNoteVariant) {
    FieldNoteVariant["default"] = "default";
    FieldNoteVariant["error"] = "error";
})(FieldNoteVariant || (FieldNoteVariant = {}));
export var FieldNote = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? FieldNoteVariant.default : _b, children = _a.children;
    return (_jsx("div", __assign({ className: "FieldNote FieldNote--".concat(variant) }, { children: children })));
};
FieldNote.variant = FieldNoteVariant;
//# sourceMappingURL=index.js.map