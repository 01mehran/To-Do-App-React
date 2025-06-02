// Components
import { TodoImg } from "./TodoImg";
import { Form } from "./Form";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-light-gray min-h-screen">
      {/* Parent */}
      <div className="flex flex-col-reverse items-center justify-center gap-5 px-3 pt-10 md:flex-row">
        {/*  Image Box */}
        <TodoImg />

        {/* Content Box */}
        <div className="flex min-h-[600px] w-full flex-col items-center justify-center rounded-[40px] bg-white px-6 sm:max-w-[480px] sm:px-10 md:px-20">
          <div className="w-full">
            <h2 className="font-Oswald mb-8 text-left text-4xl font-bold">
              Sign in
            </h2>
          </div>

          <Form />
          {/* Divided Or */}
          <div className="relative my-6 flex w-full items-center">
            <div className="bg-light-gray h-px flex-grow"></div>
            <span className="mx-4 text-black/52">Or</span>
            <div className="bg-light-gray h-px flex-grow"></div>
          </div>

          {/* Social Media Icons */}
          <SocialMediaIcons />
          <p className="font-Inder mt-6 text-[15px]  font-medium text-black">
            Don't have an account?
            <Link to="/signUpPage" className="hover:text-light-green pl-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
