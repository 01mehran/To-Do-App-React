import React from "react";
import eyeIcon from "@/assets/icons/eye_icon.svg";
import { Input } from "./Input";
import { Button } from "./Button";
export const Form = () => {
  return (
    <form className="w-full space-y-4">
      <Input placeholder="Enter your Email" type="email" />
      <div className="focus-within:ring-light-green flex items-center rounded-[7px] border border-black/60 px-2 py-2 focus-within:border-transparent focus-within:ring-2">
        <input
          type="password"
          placeholder="password"
          className="accent-light-green w-full border-0 outline-0"
        />
        <img src={eyeIcon} alt="eyeIcon" className="cursor-pointer" />
      </div>
      <Button context={"Sign in"} />
    </form>
  );
};
