import React, {useState} from "react";
const InputField = ({name, type,id,label,onChange, placeholder,value})=>{
    const [inFocus,setInFocus] = useState(false);
    return (
      <div className="text-sm">
        <label htmlFor={id} className={` ${inFocus?'text-primary':'text-gray-700'} text-xs transition-all font-semibold`}>{label}</label>
        <div className='mt-1'>
        <input  type={type} onFocus={()=>setInFocus(true)} onBlur={()=>setInFocus(false)} onChange={onChange} value={value} name={name} id={id} placeholder={placeholder} className="py-[9px] px-2 text-xs outline-none border-2 rounded-md w-full" />
        </div>
      </div>
      
    )
  }

  export default InputField