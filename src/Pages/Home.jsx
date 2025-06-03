import { Menu } from "../components/Menu";
import { Button } from "../components/Button";
export const Home = () => {
  return (
    <div className="flex gap-6 px-5 py-4">
      <Menu />
      <div className="bg-smoky-gray grid w-full place-content-center rounded-[50px]">
        <div className="max-w-[500px] space-y-16 text-center">
          <h3 className="font-Oswald text-4xl font-normal text-black">
            Wellcome to ToDoPy
          </h3>
          <p className="font-NotoSans text-[15px] leading-6 font-normal">
            A to-do app is a simple, user-friendly digital tool designed to help
            individuals and teams organize tasks and manage their daily
            activities efficiently. Users can create, edit, and prioritize
            tasks, set deadlines or reminders, categorize items, and track their
            progress, all within an intuitive and accessible interface. These
            apps are essential for improving productivity, reducing stress, and
            ensuring that important responsibilities are not forgotten.
          </p>
          <button className="font-Oswald bg-light-green h-[42px] w-[218px] cursor-pointer rounded-[10px] text-[24px] font-normal transition-all duration-300 hover:translate-y-1">
            Go to tasks
          </button>
        </div>
      </div>
    </div>
  );
};
