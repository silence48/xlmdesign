import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.scss";
export var PieProgress = function (_a) {
    var total = _a.total, passed = _a.passed, failed = _a.failed, customSize = _a.customSize, customBackgroundColor = _a.customBackgroundColor;
    if (process.env.NODE_ENV === "development" && passed + failed > total) {
        throw new Error("PieProgress: passed + failed is greater than total");
    }
    var passedPercentage = Math.round((passed / total) * 100);
    var failedPercentage = Math.round((failed / total) * 100);
    var backgroundPieces = "conic-gradient(\n    var(--pal-success) ".concat(passedPercentage, "%,\n    var(--pal-error) 0 ").concat(passedPercentage + failedPercentage, "%,\n    var(--pal-background-tertiary) 0\n  )");
    var customStyle = __assign(__assign({}, (customBackgroundColor
        ? { "--PieProgress-background-color": customBackgroundColor }
        : {})), (customSize ? { "--PieProgress-size": customSize } : {}));
    return (_jsx("div", { className: "PieProgress", style: __assign({ background: backgroundPieces }, customStyle) }));
};
PieProgress.displayName = "PieProgress";
//# sourceMappingURL=index.js.map