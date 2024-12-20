const WhyUsCard = ({ item: { title, icon } }) => (
  <div className=" text-white bg-accent rounded-xl py-6 px-3">
    {/* <img src={image} alt={title} className="rounded-t-md" /> */}

    <div className="py-4 flex items-center flex-col gap-2">
      {icon}
      <h2 className="mb-2 font-bold text-xl">{title}</h2>
      {/* <p className="text-[#777] hidden">{description}</p> */}
    </div>
  </div>
);

export default WhyUsCard;
