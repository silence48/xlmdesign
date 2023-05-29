import { __assign } from "tslib";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import { Heading2 } from "../Heading";
import { NavButton } from "../NavButton";
import { Icon } from "../../icons";
import "./styles.scss";
var MODAL_OPEN_CLASS_NAME = "modal-open";
var ModalHeading = function (_a) {
    var children = _a.children;
    return (_jsx(Heading2, __assign({ className: "ModalHeading" }, { children: children })));
};
var ModalBody = function (_a) {
    var children = _a.children;
    return _jsx("div", __assign({ className: "ModalBody" }, { children: children }));
};
var ModalFooter = function (_a) {
    var children = _a.children;
    return _jsx("div", __assign({ className: "ModalFooter" }, { children: children }));
};
export var Modal = function (_a) {
    var _b = _a.parentId, parentId = _b === void 0 ? "root" : _b, visible = _a.visible, onClose = _a.onClose, _c = _a.disableWindowScrollWhenOpened, disableWindowScrollWhenOpened = _c === void 0 ? true : _c, offsetTop = _a.offsetTop, children = _a.children;
    var parent = null;
    if (typeof document !== "undefined") {
        parent = document.getElementById(parentId);
    }
    var customStyle = __assign({}, (offsetTop ? { "--Modal-offset-top": offsetTop } : {}));
    var closeOnEscape = useCallback(function (event) {
        if (event.key === "Escape") {
            onClose();
        }
    }, [onClose]);
    useEffect(function () {
        if (disableWindowScrollWhenOpened && visible) {
            if (typeof document !== "undefined") {
                document.body.classList.add(MODAL_OPEN_CLASS_NAME);
            }
            ;
        }
        else {
            if (typeof document !== "undefined") {
                document.body.classList.remove(MODAL_OPEN_CLASS_NAME);
            }
            ;
        }
    }, [disableWindowScrollWhenOpened, visible]);
    useEffect(function () {
        if (visible) {
            if (typeof document !== "undefined") {
                document.addEventListener("keyup", closeOnEscape);
            }
            ;
        }
        else {
            if (typeof document !== "undefined") {
                document.removeEventListener("keyup", closeOnEscape);
            }
            ;
        }
    }, [visible, closeOnEscape]);
    if (!parent || !visible) {
        return null;
    }
    return ReactDOM.createPortal(_jsxs("div", __assign({ className: "Modal", style: customStyle }, { children: [_jsxs("div", __assign({ className: "Modal__container" }, { children: [_jsx("div", __assign({ className: "Modal__content" }, { children: children })), _jsx("div", __assign({ className: "Modal__close" }, { children: _jsx(NavButton, { id: "modal-close-button", title: "Close modal", onClick: onClose, icon: _jsx(Icon.X, {}) }) }))] })), _jsx("div", { className: "Modal__background", onClick: onClose })] })), parent);
};
Modal.displayName = "Modal";
Modal.Heading = ModalHeading;
Modal.Heading.displayName = "Modal.Heading";
Modal.Body = ModalBody;
Modal.Body.displayName = "Modal.Body";
Modal.Footer = ModalFooter;
Modal.Footer.displayName = "Modal.Footer";
//# sourceMappingURL=index.js.map