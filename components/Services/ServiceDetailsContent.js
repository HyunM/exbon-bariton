import React, { Component } from "react";

class ServiceDetailsContent extends Component {
  render() {
    return (
      <div className="services-details-area ptb-110">
        <div className="container">
          <div className="services-details-overview">
            <div className="services-details-desc mb-30">
              <h3>Hail to our Team</h3>
              <p>
                A great team creates best results. We strive to provide our
                clients with highly qualified subcontractors and trades people
                on site.
              </p>

              <p>
                Our reputation is built on the quality of our work thanks in
                large part to the strong subcontractor relationships we have in
                various projects.
              </p>
            </div>

            <div className="services-details-image">
              <img
                src="/images/services-details/service-details1.jpg"
                alt="image"
                style={{ width: "700px", height: "250px" }}
              />
            </div>
          </div>

          <div className="services-details-overview">
            <div className="services-details-image mb-30">
              <img
                src="/images/services-details/service-details2.jpg"
                alt="image"
                style={{ width: "700px", height: "250px" }}
              />
            </div>

            <div className="services-details-desc">
              <h3>Join our Team</h3>
              <p>
                We invite qualified subcontractors who share our core
                philosophy. We value the knowledge, skill and reliability our
                subcontractors bring to each project. We are deeply committed to
                maintaining strong working relationships and developing
                opportunities to thrive together.
              </p>
              <p>
                If you are interested in registering as an Exbon subcontractor,
                please fill out forms below and submit to us.
              </p>

              {/* <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </li>
                    <li>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo.
                    </li>
                    <li>
                      But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete.
                    </li>
                  </ul> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceDetailsContent;
