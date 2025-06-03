import React from "react";
// EyeIcons;
import { FaRegEyeSlash } from "react-icons/fa6";
import eyeIcon from "@/assets/icons/eye_icon.svg";

// State;
import { useState } from "react";

// Components;
import { Input } from "./Input";
import { Button } from "./Button";
export const Form = () => {
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  return (
    <form className="w-full space-y-4">
      <Input placeholder="Enter your Email" type="email" />
      <div className="focus-within:ring-light-green flex items-center rounded-[7px] border border-black/60 px-2 py-1 focus-within:border-transparent focus-within:ring-2">
        <input
          type={show ? "text" : "password"}
          placeholder="password"
          className="accent-light-green w-full border-0 outline-0"
        />
        <p className="cursor-pointer" onClick={showHandler}>
          {show ? <img src={eyeIcon} alt="eyeIcon" /> : <FaRegEyeSlash />}
        </p>
      </div>
      <div></div>
      <Button context={"Sign in"} />
    </form>
  );
};
