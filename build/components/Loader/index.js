import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.scss";
export var Loader = function (_a) {
    var size = _a.size;
    var customStyle = __assign({}, (size ? { "--Loader-size": size } : {}));
    return (_jsxs("div", __assign({ className: "Loader", style: customStyle }, { children: [_jsx("div", {}), _jsx("div", {}), _jsx("div", {}), _jsx("div", {})] })));
};
Loader.displayName = "Loader";
//# sourceMappingURL=index.js.map