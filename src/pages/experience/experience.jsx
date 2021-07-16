import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Brand from "../../assets/img/experience/brand.png";
import Tilt from "react-tilt";
import "./experience.style.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={Brand} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Web Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    {/*<strong className="body-title-style ">Web Developer</strong>*/}
                    <br />
                    <strong>Technology:</strong> Javascript, HTML, CSS, React JS, Bootstrap
                    <br />
                    <strong>Duration:</strong> April 2018 - Present
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">

                   <li> 3+ years of experience in website design, development and implementation using HTML5,
                        CSS3, Javascript, Bootstrap and Wordpress.</li>
                  <li>Implemented responsive websites and landing pages from concept through deployment.</li>
                  <li>Developed email templates using HTML and CSS.</li>
                  <li>Experience with email-marketing, content marketing, SEO , social media marketing</li>




                     

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
