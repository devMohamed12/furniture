 const FounderItem = ({ item: { name, image, information } }) => (
   <div className="relative min-h-40 text-center text-black !bg-[#F6F6F6] p-4 rounded-lg shadow-md flex  flex-col justify-center items-center hover:shadow-LG transition-all duration-500 hover:-translate-y-4" >
     <div className="p-4">
       <img
         src={image}
         alt={`${name}s image`}
         className=" w-20 block mx-auto rounded-full absolute top-[1%] left-1/2 -translate-x-1/2 -translate-y-1/2"
       />
     </div>
     <div className="">
       <h3 className="text-xl font-bold mt-1 my-3 text-[#aa8453]">{name}</h3>
       <p className="tex-subText text-sm w-5/6 mx-auto">{information}</p>
     </div>
   </div>
 );
export  default FounderItem