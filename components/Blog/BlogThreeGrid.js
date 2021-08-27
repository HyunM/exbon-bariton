import React, { Component } from "react";
import Link from "next/link";

class BlogThreeGrid extends Component {
  render() {
    return (
      <section className="blog-area ptb-110" style={{ paddingTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0px",
                marginBottom: "50px",
              }}
            >
              <p style={{ fontSize: "1.1rem" }}>
                Exbon is always looking for talented, educated, committed, and
                passionate people to join our team. If you have a desire to be
                involved in a diverse construction company that focuses its
                efforts on helping individuals grow and succeed with the
                company, then Exbon is a perfect work environment for you.
              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-post-content">
                  <h3>
                    <Link href="/blog-details">
                      <a style={{ cursor: "default" }}>
                        Construction Project Manager
                      </a>
                    </Link>
                  </h3>
                  <a
                    className="learn-more-btn"
                    style={{ marginBottom: "10px" }}
                  >
                    Job Requirements
                  </a>

                  <ul>
                    <li style={{ marginBottom: "10px" }}>
                      Ensures safety, scheduling and team development of their
                      project while meeting customer expectations
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Understands contracts, establish project objectives,
                      policies, procedures, and performance standards
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Collaborate with clients, project leads, team members and
                      subcontractors
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Collaborate with engineers, architects etc. to determine
                      the specifications of the project
                    </li>
                  </ul>
                  <a
                    className="learn-more-btn"
                    style={{ marginBottom: "10px", marginTop: "0px" }}
                  >
                    Job Qualifications
                  </a>
                  <ul>
                    <li style={{ marginBottom: "10px" }}>
                      Proficiency in MS Office, MS Project, etc.
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Flexibility with travel requirements & overtime as
                      necessary
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Bachelor’s Degree in Architecture, Civil Engineering or
                      other Engineering preferred
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-post-content">
                  <h3>
                    <Link href="/blog-details">
                      <a style={{ cursor: "default" }}>Estimator</a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <a className="learn-more-btn">Read More</a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-post-content">
                  <h3>
                    <Link href="/blog-details">
                      <a style={{ cursor: "default" }}>
                        Construction Project Engineer
                      </a>
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <a className="learn-more-btn">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    );
  }
}

export default BlogThreeGrid;
