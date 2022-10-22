import React from "react";
import { plays } from "../../config/config";
import triangle from "../../assets/triangle.png";
import { NavLink } from "react-router-dom";
const Options = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center flex-wrap gap-10 w-96">
        <img
          className="absolute w-screen h-2/5 sm:h-auto sm:w-52 top-56 opacity-40"
          src={triangle}
          alt=""
        />
        {plays.map((item) => (
          <div
            key={item.name}
            className={`${item.border}    border-12 bg-white rounded-full z-20 hover:bg-green-200 ${item.rotate}`}
          >
            <NavLink className="" to={`/${item.name}`}>
              <img
                className={`${item.border}  object-cover w-24 p-3 hover:p-0  rounded-full `}
                src={item.img}
                alt=""
              />
            </NavLink>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
};

export default Options;
