import { Routes, Route, Navigate } from "react-router-dom";
import routes from "routes.js";
import FixedPlugin from "components/fixedPlugin/FixedPlugin";

export default function DefaultLayout() {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/default") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div className="relative float-right h-full min-h-screen w-full !bg-white dark:!bg-navy-900">
      <FixedPlugin />
      <main className={`mx-auto min-h-screen`}>
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
