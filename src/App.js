import React from "react";
import MyNavbar from "./components/my-navbar/mynavbar";
import MyCarousal from "./components/my-carousal/mycarousal";
import TitleMessage from "./components/title-message/title-message";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import Experience from "./pages/experience/experience";
import TimeLine from "./components/projects-timeline/projects-timeline";
import ContactForm from "./pages/contact-form/contact-form";
import Container from "react-bootstrap/Container";


import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import { Parallax } from "react-parallax";
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";
import FooterPanel from "./components/footer/footer";


import './App.css';

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <TitleMessage />
      <MyNavbar />
      {<Particles
        className="particles particles-box"
        params={particlesOptions}
      /> }

      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
       <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>

      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>

       <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
       <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />

    <FooterPanel/>
      
    </div>
  );
};

export default App;
