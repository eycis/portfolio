import React from 'react'
import Review from './Review';

export const ReviewsPage = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[1rem] bg-[#1e1e1f]'>
        <h1 className='heading'>
            Client Reviews
        </h1>
        <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
            <Review/>
        </div>
    </div>
  );
};
export default ReviewsPage;