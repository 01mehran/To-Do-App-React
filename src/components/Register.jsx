import React from "react";
import { TodoImg } from "./TodoImg";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import eyeIcon from "@/assets/icons/eye_icon.svg";

export const Register = () => {
  return (
    <div className="bg-light-gray min-h-screen">
      <div className="flex flex-col-reverse items-center justify-center gap-5 px-3 pt-10 md:flex-row">
        <TodoImg />
        <div className="sm:12 flex min-h-[600px] w-full flex-col items-center justify-center space-y-5 rounded-[40px] bg-white px-8 sm:max-w-[480px] md:px-20">
          <div className="w-full">
            <h2 className="font-Oswald mb-8 text-left text-4xl font-bold">
              Sign up
            </h2>
          </div>
          {/* Input fileds */}
          <section className="space-y-4">
            <Input placeholder={"First Name"} type={"text"} />
            <Input placeholder={"Last Name"} type={"text"} />
            <Input placeholder={"E-mail address"} type={"text"} />
            <div className="focus-within:ring-light-green flex items-center rounded-[7px] border border-black/60 px-2 py-1 focus-within:border-transparent focus-within:ring-2">
              <input
                type="password"
                placeholder="password"
                className="accent-light-green w-full border-0 outline-0"
              />
              <img src={eyeIcon} alt="eyeIcon" className="cursor-pointer" />
            </div>
            <Input placeholder={"Re-enter the password"} type={"password"} />
          </section>
          <Button context={"Sign up"} />
          <p className="font-NotoSans text-center text-[15px] font-medium">
            Already have an account?{" "}
            <Link to="/loginPage" className="hover:text-light-green pl-px">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
