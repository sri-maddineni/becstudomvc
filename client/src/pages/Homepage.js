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
      <div class="container text-center">
        <div id="carouselExampleSlidesOnly" class="carousel slide" style={{"margin": "50px", "display": "inline-block"}}
          data-ride="carousel" data-interval="5000">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block" src="https://shorturl.at/mEFY0" alt="First slide"/>
            </div>
            <div class="carousel-item">
              <img class="d-block" src="https://shorturl.at/iqEOQ" alt="Second slide"/>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
