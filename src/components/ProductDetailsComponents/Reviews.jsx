import React from 'react';
import Review from './Review';

const Reviews = () => {
  const review = {
    name: "John",
    date: "2022-01-01",
    content: "Nice product",
    rating: 5,
    avatar: "https://picsum.photos/200",
  };

  return (
    <section className="section-space">
      <h3 className="main-title mb-14">Customers Reviews</h3>

      <div className="container mx-auto px-16">
        <div>
          <Review review={review} />
          <Review review={review} />
          <Review review={review} />
        </div>
      </div>
    </section>
  );
}

export default Reviews;