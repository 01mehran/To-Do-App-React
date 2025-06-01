import React from "react";
import { Link } from "react-router-dom";

export const Button = ({ context }) => {
  return (
    <>
    <Link to="/loginPage">
      <button
        type="submit"
        className="bg-light-green font-Inder block w-full cursor-pointer rounded-[10px] py-2 text-base font-medium transition-all hover:translate-y-px"
        >
        {context}
      </button>
    </Link>
    </>
  );
};
