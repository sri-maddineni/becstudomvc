import React from "react";
import Footer from "../components/layouts/Footer";
import { Toaster } from "react-hot-toast";
import "./Homepage.css";
import Nav from "../components/UIComponents/Nav";

const Homepage = () => {
  const carouselImages = [
    "https://st2.depositphotos.com/3837271/8401/i/950/depositphotos_84015096-stock-photo-hostels-written-in-search-bar.jpg",
    "https://shorturl.at/mEFY0",
    "https://images.shiksha.com/mediadata/images/articles/1581333516phpVSycrt.jpeg",
  ];

  return (
    <>
      <Nav />
      <Toaster />
      <div className="container text-center" style={{  border:"solid 1px black",marginTop:"50px" }}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" style={{ margin: "30px", display: "inline-block" }} data-ride="carousel" data-interval="5000">
          <div className="carousel-inner">
            {carouselImages.map((imageUrl, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                <img className="d-block" src={imageUrl} alt={`Slide ${index + 1}`} style={{width:"450px",height:"250px",objectFit:"cover"}} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
