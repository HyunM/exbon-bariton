import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";

const careers = () => {
  return (
    <>
      <NavbarTwo />
      <PageBanner
        pageTitle="Careers"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Careers"
        bgImgClass="item-bg6"
      />
      {/* <FreeTrialForm /> */}
      <BlogThreeGrid />
      <Footer />
    </>
  );
};

export default careers;
