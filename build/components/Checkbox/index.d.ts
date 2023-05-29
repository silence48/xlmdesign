import React from "react";
import "./styles.scss";
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string | React.ReactNode;
    note?: string | React.ReactNode;
    error?: string | React.ReactNode;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export {};
//# sourceMappingURL=index.d.ts.map