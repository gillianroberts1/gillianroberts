import { Col } from "react-bootstrap";
import "./ProjectCard.css";
import { useState } from "react";
import { PopUp } from "./PopUp";

const ProjectCard = ({
  title,
  description,
  features,
  stack,
  imgUrl,
  link,
  viewApp,
  videoUrl,
  showPopUp,
}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col xs={12} sm={6} md={6} className="project-col">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <span>{stack}</span>
          <br></br>
          <span>{features}</span>
          <br></br>
          <button className="play-app" onClick={() => window.open(link, "_blank")}>
            {viewApp}
          </button>
          {showPopUp && (
            <button className="play-app" onClick={() => setModalShow(true)}>{showPopUp}</button>
          )}
          <PopUp
            show={modalShow}
            onHide={() => setModalShow(false)}
            videoUrl={videoUrl}
          />
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
