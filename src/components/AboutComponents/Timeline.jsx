import { TimelineItem } from "../../export.jsx";

const Timeline = ({ data }) => {
  return (
    <section className=" mt-20 bg-[#F6F6F6]">
      <div className="py-16 container mx-auto">
        <h2 className="main-title text-[#aa8453]">our achievements</h2>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical   mt-20">
          {data.map((item, index) => (
            <TimelineItem
              item={item}
              key={index}
              // timeLineStart={index % 2 ? true : false}
              timeLineStart={index % 2 === 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Timeline;
