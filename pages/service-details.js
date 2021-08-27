import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import SubcontractorsDetails from "../components/Services/ServiceDetailsContent";
import Footer from "../components/Layouts/Footer";

class ServiceDetails extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner
          pageTitle="Subcontractors"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Subcontractors"
          bgImgClass="item-bg4"
        />

        <SubcontractorsDetails />

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
