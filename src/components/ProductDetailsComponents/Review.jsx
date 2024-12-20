const Review = ({ review: { name, date, avatar, comment, rating } }) => (
  <div className="mb-12">
    <div className="flex gap-3 items-center mb-3">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={avatar} alt={`${name}'s avatar`} />
        </div>
      </div>
      <div>
        <h4>{name}</h4>
        <p className="text-sm my-2">{date}</p>
        <p>{rating}</p>
      </div>
    </div>
    <div>
      <p>{comment}</p>
    </div>
  </div>
);

export default Review;
