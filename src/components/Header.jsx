import React from "react";
import { FaBeer } from "react-icons/fa";

const Header = () => {
  return (
    <div className="my-5">
      <div className="bg-white flex items-center justify-between  p-5 rounded-md shadow">
        <div>
          <ul className="flex items-center ">
            {[
              "Home",
              "Mega Menu",
              "Features",
              "Documentation",
              "Shortcodes",
            ].map((item, index) => (
              <li key={index}>
                <a className="mr-5" href="">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <button>{FaBeer}</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
