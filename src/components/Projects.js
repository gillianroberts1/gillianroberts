import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import projectImg1 from "../assets/img/SGARhome.png";
import projectImg2 from "../assets/img/BrewDogHome.png";
import ProjectCard from "./ProjectCard";
import projectImg3 from "../assets/img/ServivorsHome.png";
import projectImg4 from "../assets/img/WiggleWaggyWalks.png";
import projectImg5 from "../assets/img/LouLousLibrary.png";
import projectImg6 from "../assets/img/tennis_order.png";
import tutorialImg1 from "../assets/img/movieland.png";
import tutorialImg2 from "../assets/img/iphonegsap.png";
import tutorialImg3 from "../assets/img/sunsister.png";

import video1 from "../assets/img/www.mp4";
import video2 from "../assets/img/stc.mp4";
import video3 from "../assets/img/lll.mp4";

import colorSharp from "../assets/img/color-sharp.png";

const Projects = () => {
  const projects = [
    {
      title: "Sizzle & Grill Aromatic Recipes",
      description: "Group Project- October 23",
      stack: "React, MongoDB, Express, Node.js, 1st party API, Responsive ",
      imgUrl: projectImg1,
      link: "https://sgar.vercel.app/",
      viewApp: "PLAY APP",
    },
    {
      title: "BrewDog Online Shop",
      description: "Personal Project - September 23",
      stack: "React, MongoDB, Express, Node.js, 3rd party API, Responsive",
      imgUrl: projectImg2,
      link: "https://brew-dog-deployed.vercel.app/",
      viewApp: "PLAY APP",
    },
    {
      title: "Wiggle Waggy Walks",
      description: "Group Project - November 23",
      features: "Authentication, Image Upload, Real-time Chat",
      stack: "Java, Spring, Firebase, React",
      imgUrl: projectImg4,
      showPopUp: "VIEW DEMO",
      videoUrl: video1,
    },
    {
      title: "SERVivors Tennis Club Booking System",
      description: "Solo Project - August 23",
      stack: "Python, PostgreSQL, Flask",
      imgUrl: projectImg3,
      showPopUp: "VIEW DEMO",
      videoUrl: video2,
    },

    {
      title: "Lou Lou's Library",
      description: "Solo Project - July 23",
      stack: "Python, Flask",
      imgUrl: projectImg5,
      showPopUp: "VIEW DEMO",
      videoUrl: video3,
    },
    {
      title: "Pink Floyd Tennis Shop",
      description: "Solo Project - July 23",
      stack: "Python, Flask",
      imgUrl: projectImg6,
    },
  ];

  const tutorials = [
    {
      title: "MovieLand",
      description: "JS Mastery React Tutorial",
      stack: "React, API integration, handling JSON responses",
      imgUrl: tutorialImg1,
      link: "https://movie-app-blush-five-72.vercel.app/",
      viewApp: "PLAY APP",
    },
    {
      title: "IPhone 15 Pro Clone",
      description: "JS Mastery Tutorial",
      stack: "React, GSAP animations, Three.JS, Sentry",
      imgUrl: tutorialImg2,
      link: "https://apple-threejs.vercel.app",
      viewApp: "PLAY APP",
    },
    {
      title: "Mybrary",
      description: "Web Dev Simplified - Full Stack Web Development Course",
      stack: "Node.js, Express.js & MongoDB",
      imgUrl: tutorialImg3,
      link: "https://mybraryjs.fly.dev/",
      viewApp: "PLAY APP",
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Stuff I've been working on </h2>
            <div className="tab-container">
              <Tabs
                defaultActiveKey="projects"
                id="project-tutorial-tabs"
                variant="pills"
                className="pills"
              >
                <Tab id="tabs" eventKey="projects" title="Projects">
                  <p>Personal and group projects</p>

                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab>
                <Tab id="tab" eventKey="tutorials" title="Tutorials">
                  <p>A selection of tutorials I have followed</p>

                  <Row>
                    {tutorials.map((tutorial, index) => {
                      return <ProjectCard key={index} {...tutorial} />;
                    })}
                  </Row>
                </Tab>
                <Col sm={6}></Col>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image" src={colorSharp} />
    </section>
  );
};

export default Projects;
