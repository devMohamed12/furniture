
const Skeletons = ({ products, count }) => {
  console.log(products);
  console.log(count);




  const i = Math.floor(Math.random() * (20 - 10 + 1)) + 10; // Generate random number between 10 and 20

  // const productsSkeletons = [...Array(count)].map((_, index) => (
  //   <div
  //     key={index}
  //     className="skeleton w-[90%] mx-auto mb-5"
  //     style={{ height: `calc(30px * ${i})` }}
  //   />
  // ));

  const productsSkeletons = <div
      className="skeleton w-[90%] mx-auto mb-5"
      style={{ height: `calc(30px * ${i})` }}
  />
  
    
    const btnsSkeletons = [...Array(count)].map((_, index) => (
      <button className="btn btn-main m-1  min-w-8" key={index}>
        <span className="loading loading-spinner loading-sm"></span>
      </button>
    ));
    
    
  return <div>{products ? productsSkeletons : btnsSkeletons}</div>;
};

export default Skeletons;


 