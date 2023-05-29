import { __assign, __rest, __spreadArray } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ButtonIcon } from "../utils/ButtonIcon";
import "./styles.scss";
var TextLinkVariant;
(function (TextLinkVariant) {
    TextLinkVariant["primary"] = "primary";
    TextLinkVariant["secondary"] = "secondary";
})(TextLinkVariant || (TextLinkVariant = {}));
export var TextLink = function (_a) {
    var iconLeft = _a.iconLeft, iconRight = _a.iconRight, _b = _a.variant, variant = _b === void 0 ? TextLinkVariant.primary : _b, disabled = _a.disabled, underline = _a.underline, children = _a.children, props = __rest(_a, ["iconLeft", "iconRight", "variant", "disabled", "underline", "children"]);
    var href = props.href, onClick = props.onClick;
    var isExternalLink = (href === null || href === void 0 ? void 0 : href.startsWith("http")) || (href === null || href === void 0 ? void 0 : href.startsWith("//"));
    var handleClick = function (event) {
        if (onClick && !disabled) {
            event.preventDefault();
            onClick(event);
        }
    };
    var customProps = __assign(__assign(__assign({}, (isExternalLink && !disabled
        ? { rel: "noreferrer noopener", target: "_blank" }
        : {})), (href && disabled ? { href: undefined } : { href: href })), (onClick
        ? {
            onClick: handleClick,
            role: "button",
        }
        : {}));
    var additionalClasses = __spreadArray(__spreadArray([], (underline ? ["TextLink--underline"] : []), true), (disabled ? ["TextLink--disabled"] : []), true).join(" ");
    return (_jsxs("a", __assign({ className: "TextLink TextLink--".concat(variant, " ").concat(additionalClasses) }, props, customProps, { children: [iconLeft ? (_jsx(ButtonIcon, __assign({ position: ButtonIcon.position.left }, { children: iconLeft }))) : null, children, iconRight ? (_jsx(ButtonIcon, __assign({ position: ButtonIcon.position.right }, { children: iconRight }))) : null] })));
};
TextLink.displayName = "TextLink";
TextLink.variant = TextLinkVariant;
//# sourceMappingURL=index.js.map