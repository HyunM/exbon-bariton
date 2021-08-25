import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <div className="logo">
                  <a href="#">
                    <img src="/images/exbon-logo.png" alt="image" />
                  </a>
                  {/* <p>
                    Over the years, Exbon Development Inc. has built a solid
                    reputation by providing commercial and public building
                    related construction.
                  </p> */}
                </div>

                <ul className="social">
                  <li>
                    <a href="#" target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Services</h3>

                <ul className="footer-services-list">
                  <li>
                    <Link href="#">
                      <a>Construction Management</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Design and Engineering</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Vertical Construction</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Sustainment / Restoration and Modernization</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Quick Links</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link
                      href={{
                        pathname: "/company",
                        query: { name: "Overview" },
                      }}
                    >
                      <a>About Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/company",
                        query: { name: "ValueAndPhilosophy" },
                      }}
                    >
                      <a>Value / Philosophy</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={{
                        pathname: "/company",
                        query: { name: "ServiceLocations" },
                      }}
                    >
                      <a>Service Location</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Subcontractors</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a>Careers</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h3>Contacts</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>Address:</span>
                    13831 Newhope St, <br /> Garden Grove, CA 92843 USA
                  </li>
                  <li>
                    <span>Email:</span>
                    hr@exbon.com
                  </li>
                  <li>
                    <span>Phone:</span>
                    +1 (714) 539-2222
                  </li>
                  <li>
                    <span>Fax:</span>
                    +1 (714) 539-2223
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <p>
                  Copyright &copy;{currentYear} Exbon Development, Inc. All
                  Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
