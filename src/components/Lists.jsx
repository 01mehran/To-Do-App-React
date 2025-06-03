import React from "react";
import plusIcon from "@/assets/icons/plusIcon.svg";

export const Lists = () => {
  return (
    <section className="mt-6">
      <div>
        <h3 className="font-Oswald text-[15px] font-semibold">Lists</h3>

        <div className="mt-2 flex flex-col gap-3 px-2">
          {/* Work */}
          <article className="bg-grey flex items-center space-x-2.5 rounded-full px-1 py-1.5">
            <span className="bg-red h-4 w-6 rounded-full"></span>
            <p className="font-NotoSans text-sm font-medium text-black/70">
              Work
            </p>
          </article>

          {/* Personal */}
          <article className="bg-grey flex items-center space-x-2.5 rounded-full px-1 py-1.5">
            <span className="bg-green h-4 w-6 rounded-full"></span>
            <p className="font-NotoSans text-sm font-medium text-black/70">
              Personal
            </p>
          </article>

          {/* Study */}
          <article className="bg-grey flex items-center space-x-2.5 rounded-full px-1 py-1.5">
            <span className="bg-blue h-4 w-6 rounded-full"></span>
            <p className="font-NotoSans text-sm font-medium text-black/70">
              Study
            </p>
          </article>

          {/* Add new  list */}
          <article className="flex cursor-pointer items-center space-x-2.5 rounded-full px-1 py-1.5">
            <img src={plusIcon} alt="plusicon" className="w-[1rem]" />
            <p className="font-NotoSans text-[ 13px] font-light text-black/70">
              Add new list
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
