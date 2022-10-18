import React, { useState } from "react";
import NavBar from "../components/navBar/NavBar";
import Options from "../components/options/Options";
import "./style.css";

const Home = () => {
  const [rules, setRules] = useState(false);

  return (
    <>
      <div className="homeDiv w-full  h-screen flex flex-col gap-14">
        <NavBar />
        <Options />
        {rules && (
          <>
            <div className="bg-white sm:p-3 rounded-lg shadow-2xl h-28 w-64 sm:w-1/4 absolute sm:right-10 bottom-0 sm:bottom-10">
              <li className="list-none">If you win, you get 1 point</li>
              <li className="list-none">If you lose, you lose 1 point</li>
              <li className="list-none">If tie, nothing happens</li>
              <li className="list-none">Click on title to reset Score</li>
            </div>
          </>
        )}
        <div className="flex justify-center">
          <button
            onClick={() => setRules(!rules)}
            className={`${
              rules ? " text-white sm:text-black z-30" : "text-white"
            }  uppercase  text-xs tracking-widest border rounded-lg w-24  sm:px-6 py-2 sm:w-34 sm:absolute  right-10 bottom-10`}
          >
            {!rules ? "Rules" : "Close"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

//Tarea, rearmar con reducer y switch para el lunes
