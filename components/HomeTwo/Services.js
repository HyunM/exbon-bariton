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

    if (router.query.name == "overview") {
      openTabSection("tab1");
      setState("Overview");
    } else if (router.query.name == "ValueAndPhilosophy") {
      openTabSection("tab2");
      setState("ValueAndPhilosophy");
    } else if (router.query.name == "ServiceLocations") {
      openTabSection("tab3");
      setState("ServiceLocations");
    }
  }, [router.isReady]);

  return (
    <div className="services-section bg-f2f6f9 ptb-110">
      <div className="container">
        <div className="section-title">
          <h2>We Offer Professional Solutions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="tab services-tab-list">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <ul className="tabs">
                <li
                  className={state == "Overview" && "current"}
                  onClick={e => {
                    openTabSection("tab1");
                  }}
                >
                  <i className="flaticon-income"></i>
                  <span>Overview</span>
                </li>

                <li
                  className={state == "ValueAndPhilosophy" && "current"}
                  onClick={e => openTabSection("tab2")}
                >
                  <i className="flaticon-automatic"></i>
                  <span>Value / Philosophy</span>
                </li>

                <li onClick={e => openTabSection("tab3")}>
                  <i className="flaticon-locked"></i>
                  <span>Service Locations</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-8 col-md-8">
              <div className="tab-content">
                <div id="tab1" className="tabs-item">
                  <div className="image">
                    <img src="/images/services-img1.png" alt="image" />
                  </div>

                  <div className="content">
                    <p>
                      1There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomized words which
                      don't look even slightly believable. If you are going to
                      use a passage.
                    </p>

                    <Link href="/service-details">
                      <a className="btn btn-primary">Read More</a>
                    </Link>
                  </div>
                </div>

                <div id="tab2" className="tabs-item">
                  <div className="image">
                    <img src="/images/services-img1.png" alt="image" />
                  </div>

                  <div className="content">
                    <p>
                      2There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomized words which
                      don't look even slightly believable. If you are going to
                      use a passage.
                    </p>

                    <Link href="/service-details">
                      <a className="btn btn-primary">Read More</a>
                    </Link>
                  </div>
                </div>

                <div id="tab3" className="tabs-item">
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

                    <Link href="/service-details">
                      <a className="btn btn-primary">Read More</a>
                    </Link>
                  </div>
                </div>

                <div id="tab4" className="tabs-item">
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

                    <Link href="/service-details">
                      <a className="btn btn-primary">Read More</a>
                    </Link>
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

                    <Link href="/service-details">
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

                    <Link href="/service-details">
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
