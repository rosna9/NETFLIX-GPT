import { useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase";
import { BG_URL,USER_AVATAR } from '../utils/constants';
import { useDispatch } from 'react-redux';
import {addUser} from "../utils/userSlice";


const Login = () =>{
  const[ isSignInForm, setIsSignInForm] =useState(true);
   const[errorMessage, setErrorMessage] =useState(null);
   const dispatch = useDispatch();

const name =useRef(null);
 const email = useRef(null);
 const password =useRef(null);


const handleButtonClick =() =>{
  const message =checkValidData(email.current.value, password.current.value);
  setErrorMessage(message);
     if(message) return;
    
    if(!isSignInForm){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    
    updateProfile(user,{
      dispalyName:name.current.value,
      photoURL:USER_AVATAR
    })
    .then(() =>{
      const{uid,email,dispalyName,photoURL}=auth.currentUser;
      dispatch(
        addUser({
          uid:uid,
          email:email,
          dispalyName:dispalyName,
          photoURL:photoURL,
        })
      );
    })
    .catch((error) => {
      setErrorMessage(error.message);
  });
})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
    }
    else{
  signInWithEmailAndPassword(
    auth, 
    email.current.value, 
    password.current.value
  )
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });    }
  
};
  const toggleSignInForm =() =>{
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className='absolute'> 
        <img className='h-screen w-screen object-fill'
        src={BG_URL}
       alt='logo'/>
      </div><div className='pt-[9%] md-pt-[10%] flex justify-center'>
      <form onSubmit ={(e)=>e.preventDefault()}
      className='w-full md:w-3/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>
        {!isSignInForm &&(
          <input
         ref={name} type="text" placeholder='Full Name' className='p-4 my-2 w-full rounded-md text-black bg-gray-700'/>
        )}
      <input 
      ref={email}
      type='text'
      placeholder='Email Address'
      className='p-4 my-2 w-full rounded-md text-black bg-gray-700'
      />
      <input 
      ref={password}
       type= "password"
        placeholder='Password'
         className='p-4 my-2 w-full bg-gray-700 rounded-md'
         />

<p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>

    <button className='p-3 my-4 bg-red-700 w-full rounded-md'
     onClick={handleButtonClick}>
      {isSignInForm ? 'Sign In' : 'Sign Up'}
    </button>
    <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
      </div>
    </div>
  );
};
export default Login;