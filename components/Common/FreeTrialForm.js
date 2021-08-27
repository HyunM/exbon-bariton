import React, { Component } from "react";

class FreeTrialForm extends Component {
  render() {
    return (
      <section className="free-trial-area">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div className="free-trial-image">
              <img src="/images/woman2.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="free-trial-content" style={{ paddingTop: "70px" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
                Exbon is an equal opportunity employer
              </h2>
              <h5 style={{ fontSize: "0.8rem", color: "#cfc9c9" }}>
                All qualified applicants will receive consideration for
                employment without regard to race, color, religion, sex, age,
                national origin, sexual orientation, pregnancy, physical or
                mental disability, citizenship, genetic information, protected
                veteran status or any other characteristic protected by federal,
                state or local law.
              </h5>

              <form action="mailto:hr4@exbon.com">
                <button>Please send resume to: hr4@exbon.com</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FreeTrialForm;
