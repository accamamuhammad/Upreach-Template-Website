import React from "react";

const PrimaryBtn = (props) => {
  return (
    <button className="bg-green-400 hover:bg-green-500 text-green-950 font-medium py-3 px-7 rounded-full">
      {props.title}
    </button>
  );
};

export default PrimaryBtn;
