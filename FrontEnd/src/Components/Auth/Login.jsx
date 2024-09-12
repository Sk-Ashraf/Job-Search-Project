import React, {useState } from 'react'
import { useContext } from 'react';
import { Context } from '../../main';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { RiLock2Fill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const {isAuthorised, setIsAuthorised} = useContext(Context);

  const handleLogin = async (e)=>{
    e.preventDefault();
    try {
      const {data} = await axios.post(
        "http://localhost:4000/api/v1/user/login", 
        { password, email, role},
        {withCredentials:true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setPassword("");
      setIsAuthorised(true);
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };
  if(isAuthorised){
    return <Navigate to={"/"}/>
  }

  return (
    <>
      <section className="authPage">
        <div className="container">
          <div className="header">
            <img src="/JobZeelogo.png" alt="logo" />
            <h3>Login to Your account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Login As</label>
              <div>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
              </div>
            </div>
            <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input
                  type="email"
                  autoComplete='email'
                  placeholder="ashu@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MdOutlineMailOutline />
              </div>
            </div>
            <div className="inputTag">
              <label>Password</label>
              <div>
                <input
                  type="password"
                  autoComplete='current-password'
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLock2Fill />
              </div>
            </div>
            <button type="submit" onClick={handleLogin} >
              Login
            </button>
            <Link to={"/register"}>Register Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/login.png" alt="login" />
        </div>
      </section>
    </>
    
  );
};

export default Login;
