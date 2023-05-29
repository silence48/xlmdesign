import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
export var Avatar = function (_a) {
    var source = _a.source, size = _a.size, borderColor = _a.borderColor;
    var renderImage = function (item) {
        if (typeof item.image === "string") {
            return _jsx("img", { alt: item.altText, src: item.image });
        }
        return (_jsx("span", __assign({ className: "Avatar__item__icon", title: item.altText }, { children: item.image })));
    };
    return (_jsx("div", __assign({ className: "Avatar" }, { children: source.map(function (item) {
            var customStyle = __assign(__assign(__assign(__assign(__assign({}, (borderColor ? { "--Avatar-border-color": borderColor } : {})), (size ? { "--Avatar-size": size } : {})), (item.backgroundColor
                ? { "--Avatar-background-color": item.backgroundColor }
                : {})), (item.iconColor ? { "--Avatar-icon-color": item.iconColor } : {})), (item.isFullSizeImage ? { "--Avatar-image-size": "100%" } : {}));
            return (_jsx("div", __assign({ className: "Avatar__item", style: customStyle }, { children: item.image ? (renderImage(item)) : (_jsx("div", { className: "Avatar__item__bullet" })) }), item.altText));
        }) })));
};
Avatar.displayName = "Avatar";
//# sourceMappingURL=index.js.map