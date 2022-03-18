import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import {MdClear} from 'react-icons/md';


const Modal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
      setIsBrowser(true);
    }, []);



    const modalContent = show ? (
        <div className="h-full w-full absolute top-0 left-0 bg-black bg-opacity-50 z-[100] items-center flex justify-center" onClick={onClose}>
            <div className="bg-white p-4 rounded-md h-[75%] w-[85%] lg:w-[60%] overflow-scroll" onClick={(e)=>e.stopPropagation()}>
                <div className="justify-between flex items-center" >
                    <div className="font-default font-semibold">{title}</div>
                    <div onClick={onClose}><MdClear/></div>
                </div>
                <hr  className="my-4"/>
                <div className="">
                    {children}
                </div>
            </div>
        </div>
      ) : null;

      if (isBrowser) {
        return ReactDOM.createPortal(
          modalContent,
          document.getElementById("modal-root")
        );
      } else {
        return null;
      }

  
}

export default Modal