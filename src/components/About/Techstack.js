import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import skill from "../../data/skill";




function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>


{

  skill.skillSet.map((item)=>{
    return (
<Col xs={4} md={2} className="tech-icons">
        {item?.icon}
      </Col>
    )
  })

}

   

    
    </Row>
  );
}

export default Techstack;
