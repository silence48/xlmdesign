import React from "react";
import "./styles.scss";
export declare enum TooltipPosition {
    BOTTOM = "bottom",
    BOTTOM_START = "bottom-start",
    BOTTOM_END = "bottom-end",
    LEFT = "left",
    LEFT_START = "left-start",
    LEFT_END = "left-end",
    RIGHT = "right",
    RIGHT_START = "right-start",
    RIGHT_END = "right-end",
    TOP = "top",
    TOP_START = "top-start",
    TOP_END = "top-end"
}
interface TooltipComponent {
    position: typeof TooltipPosition;
}
interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: TooltipPosition;
    isVisible?: boolean;
    disableClick?: boolean;
}
export declare const Tooltip: React.FC<TooltipProps> & TooltipComponent;
export {};
//# sourceMappingURL=index.d.ts.map