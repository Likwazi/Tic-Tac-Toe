import React from "react";

const Square = ({ val, chooseSquare }) => {
  return (
    <div
      className="basis-1/3 h-full border-4 border-red-500 cursor-pointer grid place-items-center text-3xl text-black hover:bg-teal-400"
      onClick={chooseSquare}
    >
      {val}
    </div>
  );
};

export default Square;
