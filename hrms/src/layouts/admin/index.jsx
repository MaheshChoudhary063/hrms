import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";
import { withStateDispatch } from "api/withStateDispatch";
import { filterRoutesByRole } from "helper";

const Admin = (props) => {
  const { Auth, ...rest } = props;
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("Dashboard");

  useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    const route = filterRoutesByRole(routes, Auth.role);
    return route.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="flex h-full w-full bg-lightPrimary dark:!bg-navy-900">
      <Sidebar />
      {/* Navbar & Main Content */}
      <div className="h-full w-full lg:ml-[17vw]">
        {/* Main Content */}
        <main className={`h-full flex-none transition-all`}>
          {/* Routes */}
          <div className="h-full">
            <Navbar
              Auth={Auth}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="mx-auto mb-auto h-full min-h-[83.3vh] p-2 pt-5 md:pr-2">
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="pr-2">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default withStateDispatch(Admin);
