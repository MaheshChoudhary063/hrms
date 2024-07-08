import React from "react";
import Links from "./components/Links";
import routes from "routes.js";
import logo from "assets/img/logos/Purple-transparent.png";
import { withStateDispatch } from "api/withStateDispatch";
import { filterRoutesByRole } from "helper";

const Sidebar = ({ Auth }) => {
  return (
    <div
      className={
        "fixed left-2 top-6 bottom-6 hidden w-[16vw] flex-col rounded-2xl bg-white pb-10 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white lg:flex"
      }
    >
      <div className={`flex items-center py-[3vh] pb-[2vh]`}>
        <div
          className="h-[5vh] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${logo})` }}
        />
      </div>
      <div className="mx-auto mb-7 h-[1px] w-[100px] bg-gray-50 dark:bg-white/30" />
      <ul className="mb-auto">
        <Links routes={filterRoutesByRole(routes, Auth.role)} />
      </ul>
    </div>
  );
};

export default withStateDispatch(Sidebar);
