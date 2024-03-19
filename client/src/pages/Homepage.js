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
      <div className="d-flex justify-content-around">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item m-2 active">
              <img className="d-block w-100" src="https://im.hunt.in/cg/Warangal/City-Guide/Paying-Guest-House-warangal.jpeg" alt="First slide" />
            </div>
            <div className="carousel-item m-2">
              <img className="d-block w-100" src="https://donboscobangalore.education/img/sections/slider/placements1.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item m-2">
              <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEe6T3LnFmlpF4WQhakzi-tP8uXPrSWkecztIs35D1Eczf8vSwGEzjUjTuL08V0EWJ0TI&usqp=CAU" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
