import { Fragment } from "react";
import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className="backdrop" />;
};

const ModalOverlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const portalEle = document.getElementById("cartspage");
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEle)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalEle)}
    </Fragment>
  );
};

export default Modal;
