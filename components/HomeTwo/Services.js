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
      setState("ConstructionManagement");
    } else if (tabNmae == "tab2") {
      setState("DesignAndEngineering");
    } else if (tabNmae == "tab3") {
      setState("VerticalConstruction");
    } else if (tabNmae == "tab4") {
      setState("HorizontalConstruction");
    } else if (tabNmae == "tab5") {
      setState("SRAndM");
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

    if (router.query.name == "ConstructionManagement") {
      openTabSection("tab1");
      setState("ConstructionManagement");
    } else if (router.query.name == "DesignAndEngineering") {
      openTabSection("tab2");
      setState("DesignAndEngineering");
    } else if (router.query.name == "VerticalConstruction") {
      openTabSection("tab3");
      setState("VerticalConstruction");
    } else if (router.query.name == "HorizontalConstruction") {
      openTabSection("tab4");
      setState("HorizontalConstruction");
    } else if (router.query.name == "SRAndM") {
      openTabSection("tab5");
      setState("SRAndM");
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
                  className={
                    state == "ConstructionManagement" ? "current" : undefined
                  }
                  onClick={e => {
                    openTabSection("tab1");
                  }}
                >
                  <i className="flaticon-gear"></i>
                  <span>Construction Management</span>
                </li>

                <li
                  className={
                    state == "DesignAndEngineering" ? "current" : undefined
                  }
                  onClick={e => openTabSection("tab2")}
                >
                  <i className="flaticon-neural"></i>
                  <span>Design and Engineering</span>
                </li>

                <li
                  className={
                    state == "VerticalConstruction" ? "current" : undefined
                  }
                  onClick={e => openTabSection("tab3")}
                >
                  <i className="flaticon-ceo"></i>
                  <span>Vertical Construction</span>
                </li>

                <li
                  className={
                    state == "HorizontalConstruction" ? "current" : undefined
                  }
                  onClick={e => openTabSection("tab4")}
                >
                  <i className="flaticon-ceo"></i>
                  <span>Horizontal Construction</span>
                </li>

                <li
                  className={state == "SRAndM" ? "current" : undefined}
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
                      src="/images/construction_management.jpg"
                      alt="image"
                      style={{ width: "900px", height: "200px" }}
                    />
                  </div>

                  <div className="content">
                    <p>
                      CM is the overall planning, coordination and control of a
                      project from beginning to completion. It is also aimed at
                      meeting a client’s requirement in order to produce a
                      functionally and financially viable project. Exbon
                      provides a total construction management solution with
                      ground level “eyes and ears” to achieve a successful
                      outcome by deploying customized resources to meet the
                      demands of each client. Services provided include:
                    </p>
                    <ul>
                      <li>Developing a Scope of Construction</li>
                      <li>Coordinating/Leading Contractual Negotiations</li>
                      <li>
                        Qualifying and Soliciting Proposals from Architects,
                        Engineers and Contractors
                      </li>
                      <li>
                        Facilitating Team Integration to Achieve Value
                        Engineering
                      </li>
                      <li>
                        Active Oversight of Construction Progress and Change
                        Orders
                      </li>
                      <li>
                        Achieving Successful Project Close-Out and Client
                        Acceptance
                      </li>
                      <li>Financial Auditing to Ensure Contract Compliance</li>
                    </ul>
                    {/* <Link href="#">
                      <a className="btn btn-primary">Read More</a>
                    </Link> */}
                  </div>
                </div>

                <div id="tab2" className="tabs-item">
                  <div className="image">
                    <img
                      src="/images/design_engineering.jpg"
                      alt="image"
                      style={{ width: "900px", height: "200px" }}
                    />
                  </div>

                  <div className="content">
                    <p>
                      Design and Engineering cover all engineering disciplines,
                      including electrical, geotechnical, civil, structural, and
                      mechanical. Exbon provides a comprehensive design services
                      with innovative and cost effective solutions for a wide
                      range of construction needs. We have the expertise to
                      successfully address simple to complex conceptual design
                      and engineering challenges.
                    </p>
                    <ul>
                      <li>
                        Conceptual, Preliminary, and Detailed Design and
                        Analysis
                      </li>
                      <li>
                        Value Engineering, Design, and Alternatives Assessment
                      </li>
                      <li>Project Engineering</li>
                      <li>
                        Facilitating Team Integration to Achieve Value
                        Engineering
                      </li>
                      <li>Design Criteria Development</li>
                    </ul>
                    {/* <Link href="#">
                      <a className="btn btn-primary">Read More</a>
                    </Link> */}
                  </div>
                </div>

                <div id="tab3" className="tabs-item">
                  <div className="image">
                    <img
                      src="/images/vertical.jpg"
                      alt="image"
                      style={{ width: "900px", height: "200px" }}
                    />
                  </div>

                  <div className="content">
                    <p>
                      Exbon performs many types of construction projects. To our
                      clients, this advantage translates to greater accuracy in
                      cost estimation, fewer problems during construction, and
                      realistic design and construction scheduling.
                    </p>
                    <p>
                      Over ninety eight percent of our projects are completed on
                      time and within budget. Exbon guarantees the best value
                      for your investment without sacrificing quality of
                      workmanship and on-time completion.
                    </p>
                    <p>
                      Our project management system ensures that subcontractors
                      are managed to meet the project guidelines. Proper
                      functioning of a facility requires the integration of
                      multiple technical disciplines, as well as sensitivity to
                      aesthetics. We provide the architecture needed for
                      facilities, site development, and the proper interface
                      with the surrounding community.
                    </p>
                    <ul>
                      <li>Medical Facilities</li>
                      <li>Public Facilities</li>
                      <li>Industrial Facilities</li>
                      <li>Commercial Office Facilities</li>
                      <li>Housing and Dining Facilities</li>
                      <li>Airport Facilities</li>
                    </ul>
                  </div>
                </div>

                <div id="tab4" className="tabs-item">
                  <div className="image">
                    <img
                      src="/images/horizontal.jpg"
                      alt="image"
                      style={{ width: "900px", height: "200px" }}
                    />
                  </div>

                  <div className="content">
                    <p>
                      Exbon has built numerous horizontal construction elements,
                      including airfield pavements, utilities, roads, parking
                      lots, truck yards, and storage yards. A significant
                      portion of our work involves construction of utility
                      systems, relocation of roads and parking areas, and paving
                      airside runways and taxiways.
                    </p>
                  </div>
                </div>

                <div id="tab5" className="tabs-item">
                  <div className="image">
                    <img
                      src="/images/srm.jpg"
                      alt="image"
                      style={{ width: "900px", height: "200px" }}
                    />
                  </div>

                  <div className="content">
                    <p>
                      Exbon has been performing S/RM, repair, and renovation
                      projects for government and commercial clients over the
                      past decades. We use the proven cost-conscious, innovative
                      approaches to improve both the functionality and/or
                      aesthetic qualities of infrastructure components.
                    </p>
                    <p>
                      As with all work performed by Exbon, these improvements
                      are executed with the utmost attention to safety and
                      quality. We pride ourselves on our ability to make
                      functional and aesthetic improvements to all components of
                      facilities and utilities.
                    </p>
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
