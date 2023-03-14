import React from "react";

const Card = () => {
  return (
    <div className="bg-white h-[100%]  rounded-xl ">
      <img
        src="https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        className="rounded-t-xl h-[60%] object-cover w-[100%]"
      />
      <div className={`lg:p-2 p-1`}>
        <h2 className="text-sm lg:text-xl lg:mb-2 font-semibold">
          Lorem ipsum dolor sit, amet consectetur
        </h2>
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-4 h-4 lg:w-8 lg:h-8 rounded-full mr-1 lg:mr-2"
          />
          <p className=" font-light lg:font-normal text-sm lg:text-base  text-blue-600  ">
            Jane Doe <span className="text-gray-700 ">in</span>{" "}
            <span className="text-gray-600 "> January</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
