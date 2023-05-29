import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
var TagVariant;
(function (TagVariant) {
    TagVariant["default"] = "default";
    TagVariant["error"] = "error";
    TagVariant["success"] = "success";
    TagVariant["warning"] = "warning";
    TagVariant["highlight"] = "highlight";
})(TagVariant || (TagVariant = {}));
export var Tag = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? TagVariant.default : _b, children = _a.children;
    return _jsx("div", __assign({ className: "Tag Tag--".concat(variant) }, { children: children }));
};
Tag.displayName = "Tag";
Tag.variant = TagVariant;
//# sourceMappingURL=index.js.map