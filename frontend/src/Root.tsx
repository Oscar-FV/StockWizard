import {
  Button,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Outlet } from "react-router-dom";

export function Root() {
  //hover:w-[70%] ease-in-out duration-300 hover:col-span-2
  return (
    <div className="grid grid-cols-12">
      <nav className="border border-blue-600 col-span-1 w-[3.5rem] h-screen grid grid-rows-6 overflow-hidden hover:w-[12rem] ease-in-out duration-300 hover:col-span-2">
        <div className="row-span-4 mt-6 mx-3 border border-red-400 ">
        <ul className="list-none space-y-14 font-subtitles">
          <li className="min-w-max">
            <a href="#" aria-label="dashboard" className="relative flex items-center space-x-4">
                <PresentationChartBarIcon className="h-8 w-8" />
              <span className="-mr-1">Dashboard</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="#" aria-label="dashboard" className="relative flex items-center space-x-4">
                <PresentationChartBarIcon className="h-8 w-8" />
              <span className="-mr-1">Dashboard</span>
            </a>
          </li>
          <li className="min-w-max">
            <a href="#" aria-label="dashboard" className="relative flex items-center space-x-4">
                <PresentationChartBarIcon className="h-8 w-8" />
              <span className="-mr-1">Dashboard</span>
            </a>
          </li>
        </ul>
        </div>
        <div className="row-start-6 row-span-1 border border-red-400"></div>
      </nav>
      <div className="col-span-11" id="detail">
        <Outlet />
      </div>
    </div>
  );
}
