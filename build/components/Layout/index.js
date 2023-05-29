import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Icon } from "../../icons";
import { ProjectLogo } from "../ProjectLogo";
import { TextLink } from "../TextLink";
import { ToggleDarkMode, ModeValue } from "../ToggleDarkMode";
import { NavButton } from "../NavButton";
import "./styles.scss";
export var Layout = function () {
};
var Inset = function (_a) {
    var children = _a.children;
    return (_jsx("div", __assign({ className: "Layout__inset" }, { children: children })));
};
var Content = function (_a) {
    var children = _a.children;
    return (_jsx("div", __assign({ className: "Layout__content" }, { children: children })));
};
var stringToCamelcase = function (str) {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
        .replace(/\s+/g, "");
};
var Header = function (_a) {
    var projectTitle = _a.projectTitle, projectLink = _a.projectLink, hasDarkModeToggle = _a.hasDarkModeToggle, onDarkModeToggleEnd = _a.onDarkModeToggleEnd, onSignOut = _a.onSignOut, showButtonBorder = _a.showButtonBorder, menu = _a.menu, contentCenter = _a.contentCenter, contentRight = _a.contentRight;
    useEffect(function () {
        if (!hasDarkModeToggle) {
            document.body.classList.add(ModeValue.light);
        }
    }, [hasDarkModeToggle]);
    return (_jsx("div", __assign({ className: "Layout__header" }, { children: _jsxs(Layout.Inset, { children: [_jsx("div", __assign({ className: "Layout__header--left" }, { children: _jsx(ProjectLogo, { title: projectTitle, link: projectLink }) })), contentCenter ? (_jsx("div", __assign({ className: "Layout__header--center" }, { children: contentCenter }))) : null, _jsxs("div", __assign({ className: "Layout__header--right" }, { children: [contentRight !== null && contentRight !== void 0 ? contentRight : null, onSignOut ? (_jsx(TextLink, __assign({ id: "sign-out-button", role: "button", onClick: onSignOut }, { children: "Sign out" }))) : null, hasDarkModeToggle ? (_jsx(ToggleDarkMode, { storageKeyId: "stellarTheme:".concat(stringToCamelcase(projectTitle)), showBorder: showButtonBorder, onToggleEnd: onDarkModeToggleEnd })) : null, (menu === null || menu === void 0 ? void 0 : menu.isEnabled) ? (_jsx(NavButton, { id: "open-side-nav-button", title: "Open side navigation", onClick: menu.onOpen, icon: _jsx(Icon.Menu, {}), showBorder: showButtonBorder })) : null] }))] }) })));
};
var Footer = function (_a) {
    var marginTop = _a.marginTop, hideLegalLinks = _a.hideLegalLinks, hideTopBorder = _a.hideTopBorder, gitHubLink = _a.gitHubLink, gitHubLabel = _a.gitHubLabel, children = _a.children;
    var customStyle = __assign(__assign({}, (marginTop ? { "--Layout-footer-margin-top": marginTop } : {})), (hideTopBorder ? { "--Layout-footer-border-color": "transparent" } : {}));
    return (_jsx("div", __assign({ className: "Layout__footer", style: customStyle }, { children: _jsx(Inset, { children: _jsxs("div", __assign({ className: "Layout__footer__content" }, { children: [hideLegalLinks ? null : (_jsxs("div", __assign({ className: "Layout__footer__legal" }, { children: [_jsx(TextLink, __assign({ href: "https://www.stellar.org/terms-of-service", variant: TextLink.variant.secondary }, { children: "Terms of Service" })), _jsx(TextLink, __assign({ href: "https://www.stellar.org/privacy-policy", variant: TextLink.variant.secondary }, { children: "Privacy Policy" }))] }))), _jsxs("div", __assign({ className: "Layout__rightSide--inline" }, { children: [gitHubLink ? (_jsx(TextLink, __assign({ href: gitHubLink, variant: TextLink.variant.secondary, iconLeft: _jsx(Icon.Github, {}) }, { children: gitHubLabel !== null && gitHubLabel !== void 0 ? gitHubLabel : "GitHub" }))) : null, children] }))] })) }) })));
};
Layout.Inset = Inset;
Layout.Inset.displayName = "Layout.Inset";
Layout.Content = Content;
Layout.Content.displayName = "Layout.Content";
Layout.Header = Header;
Layout.Header.displayName = "Layout.Header";
Layout.Footer = Footer;
Layout.Footer.displayName = "Layout.Footer";
//# sourceMappingURL=index.js.map