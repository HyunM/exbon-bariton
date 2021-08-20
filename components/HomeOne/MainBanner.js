import React, { Component } from "react";
import Link from "next/link";

class MainBanner extends Component {
  render() {
    return (
      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1>Together, we build better</h1>
                <p>
                  With our proven record of successfully working at various
                  constructions sites for the past decades, we now have the
                  resources, knowledge, and experiences to undertake ANY JOB,
                  ANYWHERE around the world.
                </p>

                <div className="btn-box">
                  <Link href="/contact">
                    <a className="btn btn-primary">Read More</a>
                  </Link>

                  {/* <Link href="/contact">
                    <a className="optional-btn">Get Started Free</a>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-services-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-robot"></i>
                  </div>

                  <h3>
                    <Link href="/service-details">
                      <a>Exbon Development, Inc.</a>
                    </Link>
                  </h3>
                  <p>
                    Over the years, Exbon Development Inc. has built a solid
                    reputation by providing commercial and public building
                    related construction.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-artificial-intelligence"></i>
                  </div>

                  <h3>
                    <Link href="/service-details">
                      <a>Construction & Remodeling</a>
                    </Link>
                  </h3>
                  <p>
                    Exbon provides a total construction management solution to
                    achieve a successful outcome by deploying customized
                    resources to meet the demands of each client.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="single-featured-services-box">
                  <div className="icon">
                    <i className="flaticon-machine-learning"></i>
                  </div>

                  <h3>
                    <Link href="/service-details">
                      <a>Exbon Development, Inc.</a>
                    </Link>
                  </h3>
                  <p>
                    Over the years, Exbon Development Inc. has built a solid
                    reputation by providing commercial and public building
                    related construction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainBanner;
