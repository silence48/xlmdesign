import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
var FieldElementPosition;
(function (FieldElementPosition) {
    FieldElementPosition["left"] = "left";
    FieldElementPosition["right"] = "right";
})(FieldElementPosition || (FieldElementPosition = {}));
export var FieldElement = function (_a) {
    var position = _a.position, children = _a.children;
    return (_jsx("span", __assign({ className: "FieldElement FieldElement--".concat(position) }, { children: children })));
};
FieldElement.position = FieldElementPosition;
//# sourceMappingURL=index.js.map