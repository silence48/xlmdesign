import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader } from "../Loader";
import { ButtonIcon } from "../utils/ButtonIcon";
import "./styles.scss";
var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["primary"] = "primary";
    ButtonVariant["secondary"] = "secondary";
    ButtonVariant["tertiary"] = "tertiary";
})(ButtonVariant || (ButtonVariant = {}));
var ButtonSize;
(function (ButtonSize) {
    ButtonSize["default"] = "default";
    ButtonSize["small"] = "small";
})(ButtonSize || (ButtonSize = {}));
export var Button = function (_a) {
    var iconLeft = _a.iconLeft, iconRight = _a.iconRight, _b = _a.variant, variant = _b === void 0 ? ButtonVariant.primary : _b, isLoading = _a.isLoading, _c = _a.size, size = _c === void 0 ? ButtonSize.default : _c, fullWidth = _a.fullWidth, children = _a.children, props = __rest(_a, ["iconLeft", "iconRight", "variant", "isLoading", "size", "fullWidth", "children"]);
    var additionalClasses = __spreadArray(__spreadArray([
        "Button--".concat(variant)
    ], (size !== ButtonSize.default ? ["Button--".concat(size)] : []), true), (fullWidth ? ["Button--full-width"] : []), true).join(" ");
    return (_jsxs("button", __assign({ className: "Button ".concat(additionalClasses) }, props, (isLoading ? { disabled: true } : {}), { children: [iconLeft ? (_jsx(ButtonIcon, __assign({ position: ButtonIcon.position.left }, { children: iconLeft }))) : null, children, iconRight ? (_jsx(ButtonIcon, __assign({ position: ButtonIcon.position.right }, { children: iconRight }))) : null, isLoading ? _jsx(Loader, {}) : null] })));
};
Button.displayName = "Button";
Button.variant = ButtonVariant;
Button.size = ButtonSize;
//# sourceMappingURL=index.js.map