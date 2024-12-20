//edit this
const FeedBackItem = ({
  item: { name, description, jobTitle, img },
  reversed,
}) => (
  <div
    className={`bg-white  mr-4  rounded-md ${
      reversed ? "lg:rounded-tr-[3.5rem]" : "lg:rounded-br-[3.5rem]"
    }`}
  >
    <div
      className={` flex flex-col gap-9 py-8  px-12  ${
        reversed ? "flex-col-reverse " : ""
      }`}
    >
      <div
        className={` rounded-sm leading-10 
          `}
      >
        <p className="text-gray-700">
          {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          quasi omnis iste iure temporibus, similique exercitationem commodi
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
          quasi omnis iste iure temporibus, similique exercitationem commodi`}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img
            src={
              img ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            }
            className="object-cover w-full h-full"
            alt={name || "Lorem ipsum dolor"}
          />
        </div>

        <div>
          <h4 className="text-xl font-semibold text-gray-900">
            {name || "Lorem ipsum dolor"}
          </h4>
          <p className="text-md text-gray-600">
            {jobTitle || "Lorem, ipsum dolor"}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default FeedBackItem;
