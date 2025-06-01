import React from "react";
import { TodoImg } from "./TodoImg";
import { Button } from "./Button";
import { Link } from "react-router-dom";

export const LandingDemo = () => {
  return (
    <div className="bg-light-gray min-h-screen">
      {/* Parent */}
      <div className="flex flex-col-reverse items-center justify-center gap-5 px-3 pt-10 md:flex-row">
        {/*  Image Box */}
        <TodoImg />

        {/* Content Box */}
        <div className="sm:12 flex min-h-[600px] w-full flex-col items-center justify-center space-y-5 rounded-[40px] bg-white px-8 sm:max-w-[480px] md:px-20">
          <h3 className="font-Oswald text-[28px] md:text-[36px]">ToDo Py</h3>
          <section className="font-NotoSans space-y-7">
            <p className="text-base leading-[1.5rem] text-black">
              Stay Organized, Get Things Done: Your Ultimate To-Do List App.
              <br />A todo list app is a digital task management tool designed
              to help users organize and prioritize their daily activities and
              responsibilities.
            </p>
            {/* Button */}
            <Button context={"Get Started"}  />
            <p className="text-center text-base font-normal mt-7">
              Already have an account?{" "}
              <Link to="/loginPage" className="hover:text-light-green pl-px">
                Sign In
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
