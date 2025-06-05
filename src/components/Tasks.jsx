import React from "react";
import upComingIcon from "@/assets/icons/UpcomIcon.svg";
import ListIcon from "@/assets/icons/listIcon.svg";
import CalendarIcon from "@/assets/icons/calendaricon.svg";
import NoteIcon from "@/assets/icons/NoteIcon.svg";
import { Link } from "react-router-dom";

export const Tasks = () => {
  return (
    <section className="mt-6">
      <div>
        <h3 className="font-Oswald text-[15px] font-semibold">Tasks</h3>
        <section className="mt-2 flex flex-col gap-5 px-3">
          {/* Upcoming */}
          <article className="flex cursor-pointer items-center justify-between transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={upComingIcon} alt="upComingIcon" className="w-5" />
              <span className="font-NotoSans text-sm font-medium text-black/70">
                <Link to="/upcommingPage">Upcoming</Link> 
              </span>
            </div>
            <span className="bg-gray text font-NotoSans w-7 rounded-full text-center text-[11px] text-black/70">
              15+
            </span>
          </article>

          {/* Today */}
          <article className="flex cursor-pointer items-center justify-between transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={ListIcon} alt="ListIcon" className="w-5" />
              <span className="font-NotoSans text-sm font-medium text-black/70">
                Today
              </span>
            </div>
            <span className="bg-gray text font-NotoSans w-7 rounded-full text-center text-[11px] text-black/70">
              8
            </span>
          </article>

          {/* Calender */}
          <article className="cursor-pointer transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={CalendarIcon} alt="CalendarIcon" className="w-5" />
              <span className="font-NotoSans text-sm font-medium text-black/70">
                Calendar
              </span>
            </div>
          </article>

          {/* Sticky Wall */}
          <article className="cursor-pointer transition-all duration-300 hover:px-1">
            <div className="flex items-center gap-1.5">
              <img src={NoteIcon} alt="NoteIcon" className="w-4" />
              <span className="font-NotoSans pl-1 text-sm font-medium text-black/70">
                Sticky Wall
              </span>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};
