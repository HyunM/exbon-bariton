import React, { Component } from "react";
import Link from "../../utils/ActiveLink";

class Navbar extends Component {
  // Search Form
  state = {
    searchForm: false,
  };
  handleSearchForm = () => {
    this.setState(prevState => {
      return {
        searchForm: !prevState.searchForm,
      };
    });
  };

  // Navbar
  _isMounted = false;
  state = {
    display: false,
    collapsed: true,
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  componentDidMount() {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <>
        <div id="navbar" className="navbar-area">
          <div className="main-nav">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <Link href="/">
                  <a className="navbar-brand">
                    <img
                      src="/images/exbon-logo.png"
                      className="main-logo"
                      alt="logo"
                    />
                    <img
                      src="/images/exbon-logo-black.png"
                      className="optional-logo"
                      alt="logo"
                    />
                  </a>
                </Link>

                <button
                  onClick={this.toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link href="/" activeClassName="active">
                        <a
                          className="nav-link"
                          // onClick={e => e.preventDefault()}
                        >
                          Home
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/company">
                        <a className="nav-link">
                          Company <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/company",
                              query: { name: "Overview" },
                            }}
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Overview
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/company",
                              query: { name: "ValueAndPhilosophy" },
                            }}
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Value / Philosophy
                            </a>
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/company",
                              query: { name: "ServiceLocations" },
                            }}
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Service Locations
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/services" activeClassName="active">
                        <a className="nav-link">
                          Services <i className="fas fa-chevron-down"></i>
                        </a>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/services",
                              query: { name: "ConstructionManagement" },
                            }}
                            activeClassName="active"
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Construction Management
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/services",
                              query: { name: "DesignAndEngineering" },
                            }}
                            activeClassName="active"
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Design And Engineering
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/services",
                              query: { name: "VerticalConstruction" },
                            }}
                            activeClassName="active"
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Vertical Construction
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/services",
                              query: { name: "HorizontalConstruction" },
                            }}
                            activeClassName="active"
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Horizontal Construction
                            </a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            href={{
                              pathname: "/services",
                              query: { name: "SRAndM" },
                            }}
                            activeClassName="active"
                          >
                            <a
                              className="nav-link"
                              style={{ fontSize: "0.9rem" }}
                            >
                              Sustainment / Restoration and Modernization
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link href="/subcontractors">
                        <a className="nav-link">Subcontractors</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/careers">
                        <a className="nav-link">Careers</a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link href="/contact" activeClassName="active">
                        <a className="nav-link">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
