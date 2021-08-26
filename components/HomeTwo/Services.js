import React, { Component, useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Link from "next/link";

const Services = () => {
  const router = useRouter();
  const [state, setState] = useState(0);

  const openTabSection = tabNmae => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className +=
      " animate__fadeInUp animate__animated";
    if (tabNmae == "tab1") {
      setState("Overview");
    } else if (tabNmae == "tab2") {
      setState("ValueAndPhilosophy");
    } else if (tabNmae == "tab3") {
      setState("ServiceLocations");
    }
  };

  // Tab
  //   const openTabSection = (evt, tabNmae) => {
  //     let i, tabcontent, tablinks;
  //     tabcontent = document.getElementsByClassName("tabs-item");
  //     for (i = 0; i < tabcontent.length; i++) {
  //       tabcontent[i].classList.remove("animate__fadeInUp");
  //       //   tabcontent[i].style.display = "none";
  //     }

  //     tablinks = document.getElementsByTagName("li");
  //     for (i = 0; i < tablinks.length; i++) {
  //       tablinks[i].className = tablinks[i].className.replace("current", "");
  //     }

  //     document.getElementById(tabNmae).style.display = "block";
  //     document.getElementById(tabNmae).className +=
  //       " animate__fadeInUp animate__animated";
  //     evt.currentTarget.className += "current";
  //   };

  useEffect(() => {
    if (!router.isReady) return;

    if (router.query.name == "Overview") {
      openTabSection("tab1");
      setState("Overview");
    } else if (router.query.name == "ValueAndPhilosophy") {
      openTabSection("tab2");
      setState("ValueAndPhilosophy");
    } else if (router.query.name == "ServiceLocations") {
      openTabSection("tab3");
      setState("ServiceLocations");
    }
  }, [router.isReady, router.query.name]);

  return (
    <div className="services-section bg-f2f6f9 ptb-110">
      <div className="container">
        <div className="section-title">
          <h2>We Offer Professional Solutions</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}
        </div>

        <div className="tab services-tab-list">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <ul className="tabs">
                <li
                  className={state == "Overview" ? "current" : undefined}
                  onClick={e => {
                    openTabSection("tab1");
                  }}
                >
                  <i className="flaticon-gear"></i>
                  <span>Construction Management</span>
                </li>

                <li
                  className={
                    state == "ValueAndPhilosophy" ? "current" : undefined
                  }
                  onClick={e => openTabSection("tab2")}
                >
                  <i className="flaticon-neural"></i>
                  <span>Design and Engineering</span>
                </li>

                <li
                  className={
                    state == "ServiceLocations" ? "current" : undefined
                  }
                  onClick={e => openTabSection("tab3")}
                >
                  <i className="flaticon-ceo"></i>
                  <span>Vertical Construction</span>
                </li>

                <li
                  className={
                    state == "ServiceLocations" ? "current" : undefined
                  }
                  onClick={e => openTabSection("tab4")}
                >
                  <i className="flaticon-ceo"></i>
                  <span>Horizontal Construction</span>
                </li>

                <li
                  className={
                    state == "ServiceLocations" ? "current" : undefined
                  }
                  onClick={e => openTabSection("tab5")}
                >
                  <i className="flaticon-ceo" style={{ float: "left" }}></i>
                  <div>
                    <span>Sustainment / Restoration and Modernization</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="tab-content">
                <div id="tab1" className="tabs-item">
                  <div className="image">
                    <img
                      src="/images/overview.jpg"
                      alt="image"
                      style={{ width: "900px", height: "200px" }}
                    />
                  </div>

                  <div className="content">
                    <h2>An Opportunity Comes with Reputation</h2>
                    <p>
                      Over the years, Exbon Development Inc. has built a solid
                      reputation by providing commercial and public building
                      related construction. Our dedication to integrity,
                      quality, efficiency, and safety has made us a leader in
                      the general construction industry. Our success has been
                      powered by a strong attention to detail, a commitment to
                      deliver the highest level of quality to our valued
                      clients, and exceptional team-building ability. From the
                      early planning stages through construction close-out, the
                      Exbon project team strives to exceed the expectations of
                      our customers, and this approach is exhibited regardless
                      of project size.
                    </p>

                    {/* <Link href="#">
                      <a className="btn btn-primary">Read More</a>
                    </Link> */}
                  </div>
                </div>

                <div id="tab2" className="tabs-item">
                  <div className="image">
                    <img
                      src="/images/value-and-philosophy.jpg"
                      alt="image"
                      style={{ width: "900px", height: "200px" }}
                    />
                  </div>

                  <div className="content">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <h2 style={{ color: "#2B95D5" }}>Integrity</h2>
                        <p>
                          Exbon’s culture is grounded in integrity and respect.
                          This means working to the highest standards of ethical
                          business culture. Our reputation for adhering to these
                          standards is one of our most valuable assets.
                        </p>
                      </div>
                      <div className="image" style={{ marginBottom: "-20px" }}>
                        <img
                          src="/images/valuechart.png"
                          alt="image"
                          style={{ width: "180px", height: "180px" }}
                        />
                      </div>
                    </div>
                    <h2 style={{ color: "#fc8724" }}>Quality</h2>
                    <p>
                      Exbon is built upon relentless pursuit of perfection. The
                      reliability of our performance and the enduring quality of
                      our projects are evidenced in our quality work for our
                      customers. We continually strive to improve our
                      performance through other endeavors.
                    </p>
                    <h2 style={{ color: "#78be43" }}>Safety</h2>
                    <p>
                      At Exbon, we believe every accident is preventable, and we
                      continue our pursuit of doing our work with zero
                      accidents. No other number is acceptable. We mandate that
                      our project managers and safety officers should be
                      certified in 30 HRS 29 CFR 1926 OSHA Construction and
                      Safety Training and USACE EM 385-1-1 Training.
                      Furthermore, we provide an average of 24 hours of formal
                      safety training to applicable project managers and safety
                      officers every year.
                    </p>
                  </div>
                </div>

                <div id="tab3" className="tabs-item">
                  <div className="image">
                    <img src="/images/service-locations.png" alt="image" />
                  </div>

                  <div className="content">
                    <h2>An Opportunity Comes with Reputation </h2>
                    <p>
                      With our proven record of successfully working at various
                      constructions sites for the past decades, we now have the
                      resources, knowledge, and experiences to undertake ANY
                      JOB, ANYWHERE around the world. We also have been
                      continually completing many projects for U.S. government
                      agencies throughout the country, seamlessly utilizing our
                      integrated construction system tools that allow for
                      sophisticated work sharing, fast and reliable
                      communications and sequencing.
                    </p>
                  </div>
                </div>

                <div id="tab4" className="tabs-item">
                  <div className="image">
                    <img src="/images/service-locations.jpg" alt="image" />
                  </div>

                  <div className="content">
                    <p>
                      An Opportunity Comes with Reputation With our proven
                      record of successfully working at various constructions
                      sites for the past decades, we now have the resources,
                      knowledge, and experiences to undertake ANY JOB, ANYWHERE
                      around the world. We also have been continually completing
                      many projects for U.S. government agencies throughout the
                      country, seamlessly utilizing our integrated construction
                      system tools that allow for sophisticated work sharing,
                      fast and reliable communications and sequencing.
                    </p>
                  </div>
                </div>

                <div id="tab5" className="tabs-item">
                  <div className="image">
                    <img src="/images/services-img1.png" alt="image" />
                  </div>

                  <div className="content">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomized words which
                      don't look even slightly believable. If you are going to
                      use a passage.
                    </p>

                    <Link href="#">
                      <a className="btn btn-primary">Read More</a>
                    </Link>
                  </div>
                </div>

                <div id="tab6" className="tabs-item">
                  <div className="image">
                    <img src="/images/services-img1.png" alt="image" />
                  </div>

                  <div className="content">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomized words which
                      don't look even slightly believable. If you are going to
                      use a passage.
                    </p>

                    <Link href="#">
                      <a className="btn btn-primary">Read More</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images  */}
      <div className="shape-img1">
        <img src="/images/shape/shape1.png" alt="image" />
      </div>
      <div className="shape-img3">
        <img src="/images/shape/shape3.png" alt="image" />
      </div>
      <div className="shape-img2">
        <img src="/images/shape/shape2.svg" alt="image" />
      </div>
      <div className="shape-img5">
        <img src="/images/shape/shape5.svg" alt="image" />
      </div>
      <div className="shape-img4">
        <img src="/images/shape/shape4.svg" alt="image" />
      </div>
      <div className="dot-shape1">
        <img src="/images/shape/dot1.png" alt="image" />
      </div>
      <div className="dot-shape2">
        <img src="/images/shape/dot3.png" alt="image" />
      </div>
    </div>
  );
};

export default Services;
