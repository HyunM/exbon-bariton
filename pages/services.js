import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ServicesDetails from "../components/HomeTwo/ServicesDetail";
import Footer from "../components/Layouts/Footer";
import Testimonials from "../components/HomeThree/Testimonials";

class Services extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner
          pageTitle="Services"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Services"
          bgImgClass="item-bg3"
        />

        <ServicesDetails />
        <Testimonials />

        <Footer />
      </>
    );
  }
}

export default Services;
