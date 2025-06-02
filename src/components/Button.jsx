import React from "react";

export const Button = ({ context }) => {
  return (
    <>
      <button
        type="button"
        className="bg-light-green font-Inder block w-full cursor-pointer rounded-[10px] py-2 text-base font-medium transition-all hover:translate-y-px"
      >
        {context}
      </button>
    </>
  );
};
