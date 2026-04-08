import Header from "./Header";
import { useState, useRef } from "react";
import validateData from "../Utils/validate";
const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    };

    const submitForm = () => {
        console.log(email);
        const errorMessage = validateData(email.current.value, password.current.value);
        setErrorMessage(errorMessage);

    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg" alt="logo"/>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute p-8 mx-auto right-0 left-0 my-44 w-3/12 border-none rounded text-white bg-black flex gap-2 flex-col items-left justify-center rounded-sm">
                <h3 className="text-4xl my-4">{isSignIn ? "Sign In" : "Sign Up"}</h3>
                {!isSignIn && <input type="text" id="fullName" ref={fullName} placeholder="Full Name" className="p-1 w-64 h-8 text-xs bg-slate-700" />}
                <input type="text" id="emailAddressOrPhno" ref={email} placeholder="Email Address or phone number" className="p-1 w-64 h-8 text-xs bg-slate-700" />
                <input type="password" id="password" ref={password} placeholder="Password" className="p-1 w-64 bg-slate-700 h-8 text-xs" />
                <p className="text-red-500">{errorMessage}</p>
                <button className="p-1 w-64 mt-4 bg-red-600 h-8 text-xs" onClick={submitForm}>Sign In</button>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="checkbox" className="border-white"/> <label className="text-xs">Remember me</label>
                </div>
                <div className="flex items-center gap-1 text-xs">
                    <p className="text-gray-400">{isSignIn ? "New to Netflix" : "Already registered?"}</p> <a href="#" className="text-white-600 text-sm" onClick={toggleSignInForm}>{isSignIn ? "Sign Up now" : "Sign In now"}</a>
                </div>
            </form>
           
        </div>
    )
}
export default Login;