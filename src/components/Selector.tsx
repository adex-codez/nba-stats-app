"use client";

import { Select, SelectTrigger, SelectValue } from "./ui/select";

export const Selector = () => {
  return (
    <>
      <div className="w-full  overflow-hidden md:flex md:flex-wrap md:gap-6">
        <div className="mb-4 w-[100%] lg:mb-2 lg:w-[20%]">
          <p className="mb-2 text-base capitalize  md:text-xl">Season</p>
          <Select>
            <SelectTrigger className="bg-white focus:ring-0">
              <SelectValue placeholder="2023-24"></SelectValue>
            </SelectTrigger>
          </Select>
        </div>
        <div className="mb-4 w-[100%] lg:mb-2 lg:w-[30%]">
          <p className="mb-2 text-base capitalize  md:text-xl">Season</p>
          <Select>
            <SelectTrigger className="bg-white focus:ring-0">
              <SelectValue placeholder="2023-24"></SelectValue>
            </SelectTrigger>
          </Select>
        </div>
        <div className="w-[100%] lg:w-[30%] ">
          <p className="mb-2 text-base capitalize  md:text-xl">Season</p>
          <Select>
            <SelectTrigger className="bg-white focus:ring-0">
              <SelectValue placeholder="2023-24"></SelectValue>
            </SelectTrigger>
          </Select>
        </div>
      </div>
    </>
  );
};
