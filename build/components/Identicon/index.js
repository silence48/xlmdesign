import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import createStellarIdenticon from "stellar-identicon-js";
import "./styles.scss";
export var Identicon = function (_a) {
    var publicAddress = _a.publicAddress, size = _a.size, shortenAddress = _a.shortenAddress, federatedAddress = _a.federatedAddress;
    if (!publicAddress) {
        return null;
    }
    var identiconCanvas = publicAddress
        ? createStellarIdenticon(publicAddress)
        : null;
    if (!identiconCanvas) {
        return null;
    }
    var customStyle = __assign({}, (size ? { "--Identicon-size": size } : {}));
    var address = federatedAddress !== null && federatedAddress !== void 0 ? federatedAddress : publicAddress;
    return (_jsxs("div", __assign({ className: "Identicon", style: customStyle, title: address }, { children: [_jsx("div", __assign({ className: "Identicon__icon" }, { children: _jsx("img", { src: identiconCanvas.toDataURL(), alt: "Stellar address identicon" }) })), _jsx("div", __assign({ className: "Identicon__address" }, { children: shortenAddress ? shortenStellarAddress(address) : address }))] })));
};
var shortenStellarAddress = function (key) {
    if (!key) {
        return "";
    }
    var isValidFederatedAddress = key.split("*").length > 1;
    if (isValidFederatedAddress) {
        return "".concat(key.split("*")[0], "*").concat(key.split("*")[1].slice(0, 3), "\u2026");
    }
    return "".concat(key.slice(0, 5), "\u2026").concat(key.slice(-5));
};
Identicon.displayName = "Identicon";
//# sourceMappingURL=index.js.map