import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdHome } from "react-icons/md";

export const SidebarLinks = (props) => {
  let location = useLocation();
  const { routes } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes) => {
    return routes.map(
      (route, index) =>
        route.layout === "/admin" &&
        !route.hide && (
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer text-sm lg:text-base">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-500 dark:text-white"
                      : "font-medium text-gray-600"
                  } transition-all ease-in-out`}
                >
                  {route.icon ? route.icon : <MdHome />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold text-brand-900 dark:text-white"
                      : "font-medium text-gray-600"
                  } transition-all ease-in-out`}
                >
                  {route.name}
                </p>
              </li>
              {activeRoute(route.path) ? (
                <div className="absolute right-0 top-px h-8 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
              ) : null}
            </div>
          </Link>
        )
    );
  };
  return createLinks(routes);
};

export default SidebarLinks;
