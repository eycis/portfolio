import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewItems from './ReviewItems';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const Review = () => {
  return (
    <Carousel
        additionalTransfrom={0}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={8000}
        centerMode={false}
        infinite
        responsive={responsive}
        itemClass='item'

    >
      <ReviewItems image="/images/me.jpg" name = "Miroslava Smržová" role="client" review=""/>
      <ReviewItems image="/images/Karel.jpg" 
        name = "Karel Hulec" 
        role="CEO of Solirax CoreDev" 
        review="Despite having little to no prior experience with aesthetic-technical 3D modeling, 
        Marie quickly oriented herself in the advanced application Blender, 
        and her very first model was deployed in a project focused on STEM education of electrical circuits 
        (physics) in VR at secondary schools. Her work is of high quality, and Marie herself is very communicative, 
        eager to learn, and hardworking. She will be a valuable asset to any team or company."/>


      
      {/* <ReviewItems image="/images/me.jpg" name = "tvoje máma" role="tvoje máma"/>
      <ReviewItems image="/images/me.jpg" name = "tvoje máma" role="tvoje máma"/> */}
    </Carousel>
  );
};

export default Review