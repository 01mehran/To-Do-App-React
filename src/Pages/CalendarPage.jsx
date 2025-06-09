import React from "react";
import { Menu } from "@/components/Menu";
import { Calendar} from "@/components/Calendar";

export const Calendarpage = () => {
  return (
    <div className="flex gap-6 px-5 py-4">
      <Menu />
      <Calendar />
    </div>
  );
};
