import React from "react";
import "./styles.scss";
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    children?: string;
    label?: string | React.ReactNode;
    note?: string | React.ReactNode;
    error?: string | React.ReactNode;
    customTextarea?: React.ReactElement;
}
export declare const Textarea: React.FC<TextareaProps>;
export {};
//# sourceMappingURL=index.d.ts.map