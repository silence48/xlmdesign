import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.scss";
import { Logo } from "../../logos";
export var ProjectLogo = function (_a) {
    var title = _a.title, _b = _a.link, link = _b === void 0 ? "/" : _b;
    return (_jsxs("div", __assign({ className: "ProjectLogo" }, { children: [_jsx("a", __assign({ href: link, rel: "noreferrer noopener" }, { children: _jsx(Logo.Stellar, {}) })), _jsx("div", __assign({ className: "ProjectLogo__title" }, { children: title }))] })));
};
ProjectLogo.displayName = "ProjectLogo";
//# sourceMappingURL=index.js.map