import React from "react";
import { Menu } from "@/components/Menu";
import { ToDo } from "@/components/ToDo";

export const TodayPage = () => {
  return (
    <div className="flex gap-6 px-5 py-4">
      <Menu />
      <ToDo context="Today" num={8} Today="Today" height="h-[575px]" />
    </div>
  );
};
