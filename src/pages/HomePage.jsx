import React from "react";
import Card from "../components/Card";
import SecondCard from "../components/SecondCard";

const HomePage = () => {
  return (
    <div className="flex lg:flex-row flex-col w-full py-8 gap-2">
      <div className="w-[100%]">
        <SecondCard />
      </div>
      <div className="grid grid-cols-2 gap-2  ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomePage;
