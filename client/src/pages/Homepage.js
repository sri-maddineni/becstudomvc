import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Toaster } from "react-hot-toast";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/UIComponents/Navbar";
import Nav from "../components/UIComponents/Nav";
import { Carousel } from 'antd';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <Toaster />
      <div className="container text-center">
        <div id="carouselExampleSlidesOnly" className="carousel slide" style={{"margin": "50px", "display": "inline-block"}}
          data-ride="carousel" data-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block" src="https://shorturl.at/mEFY0" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block" src="https://shorturl.at/iqEOQ" alt="Second slide"/>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
