import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import project from "../../data/project";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


            {
               project.project.map((item,index) => {
                return (
                  <Col md={4} className="project-card" key={index}>
              <ProjectCard
              landscpe={item.islandscpe}
              index={index}
              imgPath={item.projectImage}
              isBlog={false}
              title={item.projectTitle}
              description={item.projectDescription}
             gitlink={item?.gitUrl}
              demoLink={item.projectUrl}
            />
                </Col>
                )
               })
            }
         


         
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
