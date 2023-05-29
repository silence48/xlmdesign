import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Layout } from "../Layout";
import "./styles.scss";
var StatusBarVariant;
(function (StatusBarVariant) {
    StatusBarVariant["info"] = "info";
    StatusBarVariant["success"] = "success";
    StatusBarVariant["error"] = "error";
    StatusBarVariant["warning"] = "warning";
})(StatusBarVariant || (StatusBarVariant = {}));
export var StatusBar = function (_a) {
    var variant = _a.variant, children = _a.children;
    return (_jsx("div", __assign({ className: "StatusBar StatusBar--".concat(variant) }, { children: _jsx(Layout.Inset, { children: children }) })));
};
StatusBar.displayName = "StatusBar";
StatusBar.variant = StatusBarVariant;
//# sourceMappingURL=index.js.map