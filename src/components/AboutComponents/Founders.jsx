import { FounderItem } from "../../export.jsx";

const Founders = ({ data }) => {
  return (
    <section className="section-space !mt-0">
      <div className="container mx-auto" >


      <h3 className="main-title text-[#aa8453]">our founders</h3>

        {/* grid container */}
        <div className="mt-20 grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16 ">
          {data.map((item, index) => (
            <FounderItem item={item} key={index} />
        ))}
      </div>
        </div>
    </section>
  );
};

export default Founders;
