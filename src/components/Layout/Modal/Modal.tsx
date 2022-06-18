import React, { ReactElement } from "react";
import ReactDOM from "react-dom";

type Props = {
   isOpen: boolean;
   children: ReactElement;
   background?: string;
   onClose: () => void;
};

const backdropStyles: React.CSSProperties = {
   backgroundColor: "rgba(0,0,0,0.6)",
   position: "fixed",
   top: 0,
   bottom: 0,
   left: 0,
   right: 0,
   zIndex: 1000,
};

export const Modal: React.FC<Props> = ({
   isOpen,
   onClose,
   children,
   background,
}) => {
   const childrenStyles: React.CSSProperties = {
      position: "fixed",
      backgroundColor: background ?? "#fff",
      zIndex: 1001,
   };

   if (!isOpen) return null;
   return ReactDOM.createPortal(
      <>
         <div style={backdropStyles} onClick={onClose}></div>
         <div style={childrenStyles}>{children}</div>
      </>,
      document.getElementById("portal") as HTMLDivElement
   );
};
