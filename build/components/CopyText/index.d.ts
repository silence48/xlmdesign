import React from "react";
import { TooltipPosition } from "../Tooltip";
import "./styles.scss";
interface CopyTextComponent {
    tooltipPosition: typeof TooltipPosition;
}
interface CopyTextProps {
    textToCopy: string;
    showTooltip?: boolean;
    doneLabel?: string;
    tooltipPosition?: TooltipPosition;
    title?: string;
    children: React.ReactElement | string;
}
export declare const CopyText: React.FC<CopyTextProps> & CopyTextComponent;
export {};
//# sourceMappingURL=index.d.ts.map