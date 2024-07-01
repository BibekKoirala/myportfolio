import React from "react";
import Works from "../Work/Works";
import Skills from "../Work/Skills";
import About from "../About/About";
import INFO from "../../common/userInfo";
import AllProjects from "../Projects/AllProjects";
import Education from "../Education/Education";

function Home() {
  return (
    <React.Fragment>
      <section
        id="welcome-hero"
        class="welcome-hero"
      >
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="header-text">
                <h2>
                   Hi <span>,</span> I am <br /> Bibek <br /> Koirala{" "}
                  <span>.</span>{" "}
				  {/* {INFO.homepage.title} */}
                </h2>
                <p>{INFO.homepage.description}</p>
                <a href="assets/download/browney.txt" download>
                  DOWNLOAD RESUME
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
		<AllProjects pinned/>
    <Education />
      <div className="container" style={{ display: "flex" }}></div>
    </React.Fragment>
  );
}

export default Home;
