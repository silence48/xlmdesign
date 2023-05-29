import React from "react";
import "./styles.scss";
declare enum LabelPosition {
    left = "left",
    right = "right"
}
interface ToggleComponent {
    labelPosition: typeof LabelPosition;
}
interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    checked: boolean;
    customInput?: React.ReactElement;
    onChange?: () => void;
    disabled?: boolean;
    labelOn?: string;
    labelOff?: string;
    labelPosition?: LabelPosition;
}
export declare const Toggle: React.FC<ToggleProps> & ToggleComponent;
export {};
//# sourceMappingURL=index.d.ts.map