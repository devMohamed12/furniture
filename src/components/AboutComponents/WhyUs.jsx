import { WhyUsCard } from "../../export";

const WhyUs = ({ data }) => {
  return (
    <section className="section-space">
      <div className="container mx-auto">
        <div className="grid  xl:grid-cols-3 grid-cols-1 gap-y-4 gap-x-12">
          {/* grid item 1 */}
          <div className="pr-3">
            <span className="bg-accent text-white text-base">
              Lorem, ipsum.
            </span>
            <h3 className="main-title mt-1   ">WHY US?</h3>
          </div>

          {data.map((item, index) => (
            <WhyUsCard key={index} item={item} />
          ))}

          {/* <div className="col-span-2 bg-[#1b1b1b] p-4 rounded-md min-h-14"></div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
