import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import "./Home.css";
import LoginPage from "./LoginPage";
import Volunteer from "./Volunteer";
import Skills from "./Skills";
import ScrollToTop from "./ScrollUp";
export default class Home extends Component {
  render() {
    return (
      <section>
        <ScrollToTop />
        <LoginPage />
        <div>
          <div>
            <div className="page-div" style={{ display: "flex" }}>
              <Contact />
              <div>
                <About />
                <Volunteer />
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
