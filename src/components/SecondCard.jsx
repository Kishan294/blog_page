import React from "react";

const SecondCard = () => {
  return (
    <div className="bg-white rounded-xl relative h-[100%]">
      <img
        src="https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt=""
        className="rounded-xl  object-cover h-[100%] w-[100%]"
      />
      <div className="h-[100%] z-1 w-[100%] top-0 rounded-xl gradient_color opacity-80 absolute" />
      <div className={`px-10 absolute bottom-2 z-10`}>
        <h2 className="lg:text-2xl text-base lg:font-semibold font-medium text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, libero!
        </h2>
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1506057213367-028a17ec52e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-4 h-4 rounded-full"
          />
          <p className="ml-2 text-white">
            Jane Doe <span>in</span> <span>January</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondCard;
