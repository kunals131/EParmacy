import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

function Modal({title,children,title,show,onClose}) {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const modalContent = ()=>{
        <div className="h-full w-full bg-black opacity-60 absolute top-0 left-0 flex justify-center items-center"></div>
    }



    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent, 
            document.getElementById("modal-root")
        );
      } else {
        return null;
      }    
  
}

export default Modal;