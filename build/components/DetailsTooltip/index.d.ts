/// <reference types="react" />
import { TooltipPosition } from "../Tooltip";
import "./styles.scss";
interface DetailsTooltipComponent {
    tooltipPosition: typeof TooltipPosition;
}
interface DetailsTooltipProps {
    details: React.ReactNode;
    children: React.ReactElement;
    isInline?: boolean;
    altText?: string;
    tooltipPosition?: TooltipPosition;
    customIcon?: React.ReactNode;
    customColor?: string;
    customSize?: string;
}
export declare const DetailsTooltip: React.FC<DetailsTooltipProps> & DetailsTooltipComponent;
export {};
//# sourceMappingURL=index.d.ts.map