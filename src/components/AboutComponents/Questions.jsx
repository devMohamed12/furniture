import { useState } from "react";

const Questions = ({ data: questions }) => {
  // State to manage the open/close status of each accordion panel
  const [openIndex, setOpenIndex] = useState(null);

  // Sample questions data
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-space">
      <div className="container mx-auto">
        <h3 className="main-title my-16 ">Q&A</h3>
        <div className="w-full mx-auto mt-10">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className="bg-[#ffffff80] rounded-md shadow overflow-hidden mb-4"
            >
              <button
                className="flex justify-between items-center w-full p-3 text-left text-gray-900 font-medium"
                onClick={() => toggleAccordion(index)}
              >
                {question.title}
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-height duration-[800ms] ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
                aria-expanded={openIndex === index}
              >
                <div className="p-1 text-gray-700">{question.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
