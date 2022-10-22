import React from "react";

const OptionDetail = ({ image, border, rotate }) => {
  return (
    <>
      <>
        <div
          className={`${rotate} border-18  ${border}  bg-white  rounded-full z-20 sm:w-48`}
        >
          <img
            className={`object-cover w-24 sm:w-48 p-4 rounded-full `}
            src={image}
            alt=""
          />{" "}
        </div>
      </>
    </>
  );
};

export default OptionDetail;
