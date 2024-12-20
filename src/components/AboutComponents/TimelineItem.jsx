const TimelineItem = ({
  item: { date, title, description },
  timeLineStart = true,
}) => {
  return (
    <li className="">
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-black"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      <div
        className={`${
          timeLineStart ? "timeline-start" : "timeline-end"
        } md:text-end m-6`}
      >
        <p
          className={`font-mono italic text-black ${
            timeLineStart ? "lg:text-right" : "lg:text-left"
          }`}
        >
          {date}
        </p>
        <h4
          className={`${
            timeLineStart ? "lg:text-right" : "lg:text-left"
          } text-xl font-bold uppercase  text-[#aa8453] my-3`}
        >
          {title}
        </h4>
        <p className={`${timeLineStart ? "lg:text-right" : "lg:text-left"}`}>
          {description}
        </p>
      </div>
      <hr />
    </li>
  );
};

export default TimelineItem;
