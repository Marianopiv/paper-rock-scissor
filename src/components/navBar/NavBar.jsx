import React, { useContext, useEffect } from "react";

import { texts } from "../../config/config";
import { GlobalContextCont } from "../../context/GlobalContext";

const NavBar = () => {
  const { score, setScore } = useContext(GlobalContextCont);

  useEffect(() => {}, [score]);

  return (
    <div
      onClick={() => setScore(0)}
      className="flex justify-center text-white pt-10 hover:cursor-pointer"
    >
      <div className="flex gap-10 sm:gap-60  border rounded-lg p-3 items-center">
        <div className="">
          {texts.map((item, index) => (
            <h3
              key={index}
              className="leading-none font-mono font-bold text-2xl uppercase"
            >
              {item}
            </h3>
          ))}
        </div>
        <div className="bg-white text-black px-8 py-2 rounded-md flex flex-col items-center justify-center">
          <h3 className="uppercase text-xs font-bold">Score</h3>
          <p className="text-5xl font-semibold">{score}</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
