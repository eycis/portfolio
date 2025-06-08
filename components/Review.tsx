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
      <ReviewItems image="/images/Mirka.png" 
        name = "Miroslava Smržová" 
        role="client" 
        review="
        Working with Marie was a real pleasure. I needed a web application for an electronic injury logbook, and Marie approached the task with complete professionalism. She quickly understood what I needed and came up with a solution that was not only functional but also clear and user-friendly. 
        The entire development process went smoothly – communication was fast and to the point, and Marie was always available when I needed her. The application worked flawlessly from the very beginning. I especially appreciated her willingness to respond to feedback, continually think about the app from the user’s perspective, and fine-tune every detail to meet their needs – all while keeping deadlines.
        The final result matched exactly what I had envisioned – easy to use, well-organized, and ready for real-world deployment. I highly recommend Marie and look forward to working with her again in the future."/>
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