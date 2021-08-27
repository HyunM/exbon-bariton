import React, { Component } from "react";
import Link from "next/link";

class Team extends Component {
  render() {
    return (
      <section className="team-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>Featured Projects</h2>
          </div>

          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img
                    src="/images/project_1.jpg"
                    alt="Complete Office Remodeling"
                  />
                </div>

                <div className="content">
                  <h3>Complete Office Remodeling</h3>
                  <br />
                  <span>Orange County</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img
                    src="/images/project_2.jpg"
                    alt="Plumbing, Electrical, Structural Steel, etc"
                  />
                </div>

                <div className="content">
                  <h3>Plumbing, Electrical, Structural Steel, etc.</h3>
                  <br />
                  <span>Los Angeles, CA</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img
                    src="/images/project_3.jpg"
                    alt="Masonry, Painting, Roofing, Landscaping, etc."
                  />
                </div>

                <div className="content">
                  <h3>Masonry, Painting, Roofing, Landscaping, etc.</h3>
                  <span>Orange County Parks</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-team-box">
                <div className="image">
                  <img
                    src="/images/project_4.jpg"
                    alt="Demolition, Temporary Facility, Abatement, etc."
                  />
                </div>

                <div className="content">
                  <h3>Demolition, Temporary Facility, Abatement, etc.</h3>
                  <span>Belmont Plaza, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
