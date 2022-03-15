import React, { useState } from 'react'


const LoginInput = ({name, type,id,label,onChange, placeholder,value})=>{
  return (
    <div>
      <label htmlFor={id} className="text-primary font-semibold">{label}</label>
      <div className='flex'>
        {name==='phone'&&
          <select name="code" className='w-[18%] mr-3 outline-none border-b-2 text-gray-500' id="code">
            <option value="-" disabled>Select Code</option>
            <option value="+92">+92 (Pakistan)</option>
            <option value="+91">+91 (India)</option>
            
          </select>
      }
      <input type={type} onChange={onChange} value={value} name={name} id={id} placeholder={placeholder} className="py-2 outline-none border-b-2 w-full" />
      </div>
    </div>
    
  )
}

const initialState = {
  fullName : "",
  password : "",
  confirmPassword : "",
  email : "",
  phone : "",
  username : "",
}

const Login = () => {
  const [isLogin,setIsLogin] = useState(true);
  const [userForm, setUserForm] = useState(initialState);
  const [error,setError] = useState("");
  const handleChange =(e)=> {
    setUserForm((prev)=>{
      return {...prev,[e.target.name] : e.target.value}
    });
    
  };
  const handleSubmit = ()=>{
    if (isLogin) {
      const {username,password} = userForm;
      const formData = {username,password};
      console.log(formData);
    }
    else {
      const {fullName,password,confirmPassword,phone,email} = userForm;
      const formData = {fullName,password,phone,email,confirmPassword};
      console.log(formData);
    }
  }
  
  return (
    <div className='bg-white p-4 mt-2'>
      <div className='text-2xl font-semibold font-poppins'>
        {isLogin?'LOGIN USER':'REGISTER USER'}
      </div>
      <div className={`text-sm ${error&&'text-red-600'} text-gray-400 mt-1`}>{!error?"Sign up or Sign in to access your orders, special offers, health tips and more!":`* ${error}`}</div>
      <div className='mt-8 space-y-6 pr-4'>
      {!isLogin&&<LoginInput onChange={handleChange} value={userForm.fullName} name="fullName" id="fullName"  label="Full Name" placeholder="Enter Full Name" type="text"/>}
        {!isLogin&&<LoginInput type="text" onChange={handleChange} value={userForm.phone} name="phone" id="phone" placeholder="Enter Phone Number" label="Phone Number"/>}
        {!isLogin&&<LoginInput onChange={handleChange} value={userForm.email} type="email" name="email" id="email" placeholder="Enter Email Address" label="Email"/>}
        {isLogin&&<LoginInput onChange={handleChange} value={userForm.username} name="username" id="username"  label="Email / Phone" placeholder="Enter your Email or Phone Number" type="email"/>}
        <LoginInput name="password" id="password" onChange={handleChange} value={userForm.password}  label="Password" placeholder="Enter Password" type="password"/>
        {!isLogin&&<LoginInput type="password" onChange={handleChange} value={userForm.confirmPassword} name="confirmPassword" id="confirmPassword" placeholder="Re-Enter Password" label="Confirm Password"/>}

      </div>
      <div className='w-[100%] text-center mt-6'>
        <div onClick={handleSubmit} className='w-[100%] bg-primary py-2 text-white text-lg rounded-md'>{isLogin?'Login':"Register"}</div>
      </div>
        <div className='text-center mt-3'>{isLogin?"Don't have an account?":"Already Have an account?"} <span onClick={()=>setIsLogin(!isLogin)} className=' text-accent underline cursor-pointer'>{!isLogin?'Login':'Register'}</span></div>
    </div>
  )
}

export default Login