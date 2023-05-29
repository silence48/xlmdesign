import { __assign, __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
var getHeadingComponent = function (Component) {
    return function (_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        if (Component) {
            return _jsx(Component, __assign({}, props, { children: children }));
        }
        return (_jsx("div", __assign({ className: "Eyebrow" }, props, { children: children })));
    };
};
export var Heading1 = getHeadingComponent("h1");
Heading1.displayName = "Heading1";
export var Heading2 = getHeadingComponent("h2");
Heading2.displayName = "Heading2";
export var Heading3 = getHeadingComponent("h3");
Heading3.displayName = "Heading3";
export var Heading4 = getHeadingComponent("h4");
Heading4.displayName = "Heading4";
export var Heading5 = getHeadingComponent("h5");
Heading5.displayName = "Heading5";
export var Heading6 = getHeadingComponent("h6");
Heading6.displayName = "Heading6";
export var Eyebrow = getHeadingComponent();
Eyebrow.displayName = "Eyebrow";
//# sourceMappingURL=index.js.map