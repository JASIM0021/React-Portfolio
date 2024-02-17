import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import skill from "../../data/skill";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
       {
        skill.toolSet.map((item,index)=>{
          return (
            <Col xs={4} md={2} className="tech-icons" key={index}>
              {item.icon}

</Col>
          )
        })
       }
     
    
    </Row>
  );
}

export default Toolstack;
