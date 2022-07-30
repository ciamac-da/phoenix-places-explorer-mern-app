import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {

  const content = (
    <CSSTransition 
    in={props.show}
    timeout={2000}
    classNames="slide-in-left"
    mountOnEnter
    unmountOnExit>
    <aside
      style={{
        position: "fixed",
        left: "0",
        top: "0",
        zIndex: "100",
        height: "100vh",
        width: "75%",
        background: "white",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        transform: "1s !important",
      }}
      onClick={props.onClick}
    >
      {props.children}
    </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"))
};

export default SideDrawer;
