import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function Auth() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-navy-900">
      <FixedPlugin />
      <main className="flex h-full w-full max-w-screen-lg items-center justify-center p-4">
        <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-lg dark:bg-navy-800">
          <div className="w-full p-8">
            <Routes>
              {getRoutes(routes)}
              <Route
                path="/"
                element={<Navigate to="/auth/sign-in" replace />}
              />
            </Routes>
          </div>
          {/* Uncomment this part if you want to use the background image on the right side */}
          {/* 
          <div className="hidden md:block md:w-1/2 bg-cover" style={{ backgroundImage: `url(${authImg})` }}>
          </div>
          */}
        </div>
      </main>
    </div>
  );
}
