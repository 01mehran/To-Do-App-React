import React from "react";

// Icons
import serachIcon from "@/assets/icons/search_icon.svg";
import settingIcon from "@/assets/icons/settingIcon.png";
import LogoutIcon from "@/assets/icons/logoutIcon.svg";

// Components
import { Tasks } from "./Tasks";
import { Lists } from "./Lists";

export const Menu = () => {
  return (
    <div className="bg-smoky-gray h-[95vh] w-full max-w-[350px] rounded-[50px] px-10 py-6">
      {/* Header */}
      <header className="flex items-center justify-between">
        <h1 className="font-Oswald text-4xl font-semibold">Menu</h1>
        <div className="flex h-6 w-6 cursor-pointer flex-col items-center justify-evenly">
          <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
          <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
          <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
          <span className="h-[3px] w-full rounded-[2px] bg-black"></span>
        </div>
      </header>
      <main>
        {/* Search Box */}
        <div className="bg-gray mt-4 flex h-9 items-center rounded-full pl-4">
          <img src={serachIcon} alt="searchIcon" className="max-w-4" />
          <input
            type="text"
            className="flex-1 rounded-full border-0 px-3 outline-0"
            placeholder="Serach..."
          />
        </div>

        {/* Tasks */}
        <Tasks />

        {/* Lists */}
        <Lists />
      </main>
      {/* footer */}
      <footer className="mt-5">
        <div className="flex flex-col gap-2">
          <article className="flex cursor-pointer items-center space-x-4 group">
            <img src={settingIcon} alt="settingIcon" className="group-hover:bg-green group-hover:p-1 transition-all duration-300 rounded-full"/>
            <p className="font-NotoSans text-lg text-black/70 group-hover:text-green">Settings</p>
          </article>
          <article className="flex cursor-pointer items-center space-x-4 group">
            <img src={LogoutIcon} alt="settingIcon" className="group-hover:bg-red group-hover:p-1 transition-all duration-300 rounded-full" />
            <p className="font-NotoSans text-lg text-black/70 group-hover:text-red">Log Out</p>
          </article>
        </div>
      </footer>
    </div>
  );
};
