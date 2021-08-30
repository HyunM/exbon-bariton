import React, { Component } from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

class ContactFormContent extends Component {
  render() {
    return (
      <section className="contact-area ptb-110">
        <div className="container">
          {/* <div className="section-title">
                        <span>Message Us</span>
                        <h2>Drop us Message for any Query</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div> */}

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src="/images/contact.png" alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <h3>Contact us by Phone Number or Email Address</h3>
                <h2>
                  <span className="number number-contact">+1 714 539 2222</span>
                  <br />
                  <span className="or">OR</span>
                  <br />
                  <span className="email email-contact">
                    <a className="email-contact" href="mailto:wconst@exbon.com">
                      Email : wconst@exbon.com
                    </a>
                  </span>
                  <br />
                  <span className="email email-contact">
                    <a className="email-contact" href="mailto:hr4@exbon.com">
                      Employment Inquiries: hr4@exbon.com
                    </a>
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="contact-info">
            <div className="contact-info-content">
              <ul className="social">
                <li>
                  <a
                    href="https://www.linkedin.com/company/exbon"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/pages/category/Community/Exbon-Development-Inc-173655286005737/"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactFormContent;
