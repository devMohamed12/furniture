 
const NewArrivals = () => {
  return (
    <section className="container mx-auto min-h-[500px]">
      <h3>NewArrivals</h3>
      <div className="flex flex-column lg:flex-row  min-h-[500px] min-w-[200px] gap-5">
        {/* part 1  */}
        <div className="  bg-red-500  lg:w-2/5 ">l</div>

        {/* part 2  */}
        <div className="lg:w-2/5">
          {/* row 1 */}
          <div className="bg-cyan-700  min-h-[230px] mb-10">l</div>

          {/* row 2  */}
          <div className="flex gap-3 justify-between flex-column lg:flex-row min-h-[230px]">
            <div className="bg-blue-500 lg:w-2/5">k</div>
            <div className="bg-blue-500 lg:w-2/5">l</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
