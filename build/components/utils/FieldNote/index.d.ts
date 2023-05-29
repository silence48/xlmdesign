import React from "react";
import "./styles.scss";
declare enum FieldNoteVariant {
    default = "default",
    error = "error"
}
interface FieldNoteComponent {
    variant: typeof FieldNoteVariant;
}
interface FieldNoteProps {
    variant?: FieldNoteVariant;
    children: string | React.ReactNode;
}
export declare const FieldNote: React.FC<FieldNoteProps> & FieldNoteComponent;
export {};
//# sourceMappingURL=index.d.ts.map