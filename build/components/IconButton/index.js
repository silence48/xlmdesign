var _a;
import { __assign, __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../../icons";
import "./styles.scss";
var IconButtonVariant;
(function (IconButtonVariant) {
    IconButtonVariant["default"] = "default";
    IconButtonVariant["error"] = "error";
    IconButtonVariant["success"] = "success";
    IconButtonVariant["warning"] = "warning";
    IconButtonVariant["highlight"] = "highlight";
})(IconButtonVariant || (IconButtonVariant = {}));
var IconButtonPreset;
(function (IconButtonPreset) {
    IconButtonPreset["copy"] = "copy";
    IconButtonPreset["download"] = "download";
})(IconButtonPreset || (IconButtonPreset = {}));
var presetDetails = (_a = {},
    _a[IconButtonPreset.copy] = {
        label: "Copy",
        altText: "Copy",
        icon: _jsx(Icon.Copy, {}),
    },
    _a[IconButtonPreset.download] = {
        label: "Download",
        altText: "Download",
        icon: _jsx(Icon.Download, {}),
    },
    _a);
export var IconButton = function (_a) {
    var icon = _a.icon, altText = _a.altText, label = _a.label, _b = _a.variant, variant = _b === void 0 ? IconButtonVariant.default : _b, preset = _a.preset, customColor = _a.customColor, customSize = _a.customSize, props = __rest(_a, ["icon", "altText", "label", "variant", "preset", "customColor", "customSize"]);
    var customStyle = __assign(__assign({}, (customColor ? { "--IconButton-color": customColor } : {})), (customSize ? { "--IconButton-size": customSize } : {}));
    var renderContent = function () {
        if (preset) {
            return (_jsxs(_Fragment, { children: [_jsx("span", __assign({ className: "IconButton__label" }, { children: label !== null && label !== void 0 ? label : presetDetails[preset].label })), presetDetails[preset].icon] }));
        }
        return (_jsxs(_Fragment, { children: [label ? _jsx("span", __assign({ className: "IconButton__label" }, { children: label })) : null, icon] }));
    };
    return (_jsx("button", __assign({ className: "IconButton IconButton--".concat(variant), title: preset ? presetDetails[preset].altText : altText }, props, { style: customStyle }, { children: renderContent() })));
};
IconButton.displayName = "IconButton";
IconButton.variant = IconButtonVariant;
IconButton.preset = IconButtonPreset;
//# sourceMappingURL=index.js.map