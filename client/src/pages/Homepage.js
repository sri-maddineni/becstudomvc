import React from "react";
import Footer from "../components/layouts/Footer";
import { Toaster } from "react-hot-toast";
import "./Homepage.css";
import Nav from "../components/UIComponents/Nav";
import LatestNews from "../components/SideComponents/LatestNews";
import SiteNews from "../components/SideComponents/SiteNews";
import  { CountServices,HomepageServices } from "../components/SideComponents/HomepageServices";


const Homepage = () => {


  return (
    <>
      <Nav />
      <Toaster />
      <div className="container" style={{ display: "flex", flexDirection: "column" }}>


        <div className="container" style={{ display: "flex", flexDirection: "row" }}>
          <div className="col-3 m-2" style={{ border: "solid 1px black", minHeight: "75vh" }}>
            <h3 className="text-center">College Updates</h3>
            <hr />
            <LatestNews />
          </div>
          <div className="col-6 m-2" style={{ minHeight: "20vh" }}>
            <div className="container" style={{ overflowY: "auto", minHeight: "10vh", marginTop: "20px" }}>
              <HomepageServices />
            </div>
          </div>
          <div className="col-3 m-2" style={{ border: "solid 1px black", minHeight: "20vh" }}>
            <h3 className="text-center">Site Features</h3>
            <hr />
            <SiteNews />
          </div>
        </div>

        <div className="m-2" style={{display:"flex",flexDirection:"row"}}>
          {CountServices() }
        </div>




      </div>
      <Footer />
    </>
  );
};

export default Homepage;
