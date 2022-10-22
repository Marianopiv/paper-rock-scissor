import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OptionDetail from "../optionDetail/OptionDetail";
import { plays } from "../../config/config";
import "./style.css";
import NavBar from "../navBar/NavBar";
import { GlobalContextCont } from "../../context/GlobalContext";
const DynamicPage = () => {
  const {
    selected,
    pcSelection,
    winner,
    setSelected,
    play,
    setScore,
    getRandomItem,
    setPcSelection,
  } = useContext(GlobalContextCont);
  const { option } = useParams();

  const navigate = useNavigate();

  const reset = () => {
    setScore(0);
    setSelected(null);
    setPcSelection(null);
    navigate(-1);
  };

  const getItem = () => {
    setSelected(plays.find((item) => item.name === option));
  };

  useEffect(() => {
    getItem();
    getRandomItem();
    //eslint-disable-next-line
  }, [selected, pcSelection]);

  useEffect(() => {
    if (selected && pcSelection) {
      play();
    }
    return () => {
      setSelected(null);
      setPcSelection(null);
    };
    //eslint-disable-next-line
  }, [selected, pcSelection]);

  return (
    <>
      <div className="homeDiv text-white h-screen ">
        <div onClick={reset} className="hover:cursor-pointer">
          <NavBar />
        </div>
        <div className="flex justify-center flex-wrap sm:flex-nowrap sm:gap-20 gap-5 mt-5 sm:mt-20 items-center">
          {selected && (
            <>
              <div className="flex flex-col items-center gap-5 sm:gap-10 w-44">
                <h1 className="text-center leading-none font-mono px-10 font-bold sm:text-2xl uppercase">
                  You Picked
                </h1>
                <OptionDetail
                  key={selected}
                  image={selected.img}
                  border={selected.border}
                  rotate={selected.rotate}
                />
              </div>
            </>
          )}

          {winner && (
            <>
              {" "}
              <div className="flex flex-col items-center gap-2 sm:gap-5 sm:mt-20 px-10">
                <h3 className="text-center leading-none font-mono font-bold text-4xl uppercase">
                  {winner}
                </h3>
                <button
                  onClick={() => navigate(-1)}
                  className="uppercase text-xs tracking-widest border font-bold rounded-lg px-10 py-2 text-blue-900 bg-white"
                >
                  Play Again
                </button>
              </div>
            </>
          )}
          {pcSelection && (
            <>
              <div className="flex flex-col items-center gap-5 sm:gap-10">
                <h1 className="leading-none font-mono font-bold sm:text-2xl uppercase">
                  The House Picked
                </h1>
                <OptionDetail
                  key={pcSelection}
                  image={pcSelection.img}
                  border={pcSelection.border}
                  rotate={pcSelection.rotate}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DynamicPage;
