import React, { useState } from "react";
import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Navbar from "../../components/UIComponents/Navbar";
import Nav from "../../components/UIComponents/Nav";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const [regno,setRegno]=useState("")

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  
      e.preventDefault();

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/api/v1/auth/register`,
          {
            name,
            email,
            password,
            phone,
            answer,
            regno                 
            
          }
        );

        if (res.data.success) {
          toast.success(res.data.message);
          navigate("/login");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Error in registration!");
      }
    
  };

 

  return (
    <>
      <Nav />
      <Toaster />
      <div className="d-flex justify-content-between">
        <div className=""></div>
        <div className="register my-2">
          <h1 className="my-2 text-center">Register user</h1>
          <form className="text-center m-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={name}
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter Full Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Enter Email"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Enter password"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                placeholder="Enter phone"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={answer}
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                placeholder="Enter secret code"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                value={regno}
                onChange={(e) => {
                  setRegno(e.target.value);
                }}
                placeholder="Enter reg no"
                required
              />
            </div>

           

            

            

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className=""></div>
      </div>
      <Footer />
    </>
  );
};
