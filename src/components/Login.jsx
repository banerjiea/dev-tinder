import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");//thala#MS7
  const[firstName, setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[isLoginForm, setIsLoginForm]=useState(true)
  const[error,setError]=useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err.response.data)
      console.error(err);
    }
  };

    const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstName,
          lastName,
          emailId,
          password,
        },
        {
          withCredentials: true,
        },
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err.response.data)
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card card-border bg-base-100 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">{isLoginForm? "Login" : "Sign up"}</h2>
          <div>
            <label className="floating-label my-4">
              <span>Your Email</span>
              <input
                type="text"
                value={emailId}
                placeholder="mail@site.com"
                className="input input-md"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="floating-label my-4">
              <span>Your Password</span>
              <input
                type="password"
                value={password}
                placeholder="password"
                className="input input-md"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {!isLoginForm && (<>
             <label className="floating-label my-4">
              <span>Your Firstname</span>
              <input
                type="text"
                value={firstName}
                placeholder="first name"
                className="input input-md"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
             <label className="floating-label my-4">
              <span>Your Lastname</span>
              <input
                type="text"
                value={lastName}
                placeholder="last name"
                className="input input-md"
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            </>)}
           
          </div>
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={isLoginForm ? handleLogin : handleSignUp}>
              {isLoginForm ? "Login" : "Signup"}
            </button>
          </div>
          <p className="m-auto cursor-pointer my-2" onClick={()=>setIsLoginForm((value)=>!value)}>
            {isLoginForm ? "New User? Sign up here!" : "Existing user? Login here!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
