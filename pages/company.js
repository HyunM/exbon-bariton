import React, { Component } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import CompanyDetails from "../components/HomeTwo/CompanyDetail";
import Footer from "../components/Layouts/Footer";

class Company extends Component {
  render() {
    return (
      <>
        <NavbarTwo />

        <PageBanner
          pageTitle="Company"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Company"
          bgImgClass="item-bg1"
        />

        <CompanyDetails />

        <Footer />
      </>
    );
  }
}

export default Company;
