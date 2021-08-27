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
                on site. Our reputation is built on the quality of our work
                thanks in large part to the strong subcontractor relationships
                we have in various projects.
              </p>
              <br />
              <br />
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
                please email or call us.
              </p>
            </div>

            <div className="services-details-image">
              <img src="/images/subcontractors1.jpg" alt="image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceDetailsContent;
