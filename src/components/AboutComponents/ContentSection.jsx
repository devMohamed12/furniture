// OurStory.js
import React from "react";

const ContentSection = ({
  data: { title, paragraph1 = "", paragraph2 = "", imageUrl },
  bg = "bg-gray-100",
  reversed = false,
}) => {
  return (
    <section className={`  ${bg}`}>
      <div className="container mx-auto">
        <div className="  flex justify-center items-center py-12 ">
          <div
            className={`block lg:flex max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden ${
              reversed ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="p-8 flex-1">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="mb-4">{paragraph1}</p>
              <p>{paragraph2 || ""}</p>
            </div>

            <div>
              <img src={imageUrl} alt={title} className="max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
