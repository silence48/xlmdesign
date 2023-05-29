import React from "react";
import "./styles.scss";
interface ModalComponent {
    Heading: React.FC<ModalHeadingProps>;
    Body: React.FC<ModalBodyProps>;
    Footer: React.FC<ModalFooterProps>;
}
interface ModalHeadingProps {
    children: string | React.ReactNode;
}
interface ModalBodyProps {
    children: React.ReactNode;
}
interface ModalFooterProps {
    children: React.ReactNode;
}
interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    parentId?: string;
    disableWindowScrollWhenOpened?: boolean;
    offsetTop?: string;
}
export declare const Modal: React.FC<ModalProps> & ModalComponent;
export {};
//# sourceMappingURL=index.d.ts.map