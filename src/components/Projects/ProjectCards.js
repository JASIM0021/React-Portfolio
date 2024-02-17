import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGit, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, EffectCards, EffectCoverflow, Pagination } from 'swiper/modules';
function ProjectCards(props) {
  const {index,landscpe,description} = props
  const [expandedText, setExpandedText] = useState([]);

  const handleReadMore = (index) => {
    const newExpandedText = [...expandedText];
    newExpandedText[index] = !newExpandedText[index];
    setExpandedText(newExpandedText);
  };
  const limitedText =
  description.length > 30
    ? expandedText[index]
      ? description
      : description.slice(0, 30) + "..."
    : description;
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" />
       */}
        <Swiper
        // effect={'cards'}
        // grabCursor={true}
        // modules={[EffectCards]}
        enteredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="card-img"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {
          props?.imgPath?.map((item,index)=>{
            return (

              <SwiperSlide>
              <Card.Img variant="top" src={item?.image}  key={index}
              
            
              
              />
                
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        {/* <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text> */}

        <Card.Text  style={{ textAlign: "justify" }} >
                            {limitedText}
                   
                              <Card.Text
                                style={{ color: "blue" }}
                                onClick={() => handleReadMore(index)}
                              >
                                {expandedText[index] ? " Read Less" : " Read More"}
                              </Card.Text>
                        
                          </Card.Text>

       {props.ghLink &&  <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {props.gitlink && (
          <Button
            variant="primary"
            href={props.gitlink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp;
            {"GIT"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
