import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
export var NavButton = function (_a) {
    var id = _a.id, title = _a.title, onClick = _a.onClick, icon = _a.icon, disabled = _a.disabled, showBorder = _a.showBorder;
    return (_jsx("button", __assign({ id: id, className: "NavButton ".concat(showBorder ? "NavButton--border" : ""), title: title, onClick: onClick, disabled: disabled }, { children: icon })));
};
NavButton.displayName = "NavButton";
//# sourceMappingURL=index.js.map