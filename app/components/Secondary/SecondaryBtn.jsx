import React from "react";

const SecondaryBtn = (props) => {
  return (
    <button className="bg-tertiary text-opacity-80 text-white py-3 px-7 rounded-full">
      {props.title}
    </button>
  );
};

export default SecondaryBtn;
