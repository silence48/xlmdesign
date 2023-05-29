import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../../icons";
import "./styles.scss";
var InfoBlockVariant;
(function (InfoBlockVariant) {
    InfoBlockVariant["info"] = "info";
    InfoBlockVariant["success"] = "success";
    InfoBlockVariant["error"] = "error";
    InfoBlockVariant["warning"] = "warning";
})(InfoBlockVariant || (InfoBlockVariant = {}));
export var InfoBlock = function (_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? InfoBlockVariant.info : _c, children = _a.children;
    var variantIcon = (_b = {},
        _b[InfoBlockVariant.info] = _jsx(Icon.Info, {}),
        _b[InfoBlockVariant.success] = _jsx(Icon.CheckCircle, {}),
        _b[InfoBlockVariant.error] = _jsx(Icon.XCircle, {}),
        _b[InfoBlockVariant.warning] = _jsx(Icon.AlertTriangle, {}),
        _b);
    return (_jsxs("div", __assign({ className: "InfoBlock InfoBlock--".concat(variant) }, { children: [_jsx("div", __assign({ className: "InfoBlock__icon" }, { children: variantIcon[variant] })), children] })));
};
InfoBlock.displayName = "InfoBlock";
InfoBlock.variant = InfoBlockVariant;
//# sourceMappingURL=index.js.map