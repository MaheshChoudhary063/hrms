import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { auth } from "api/firebaseConfig";
import DefaultLayout from "layouts/default";

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser && pathname.startsWith("/admin")) {
        navigate("/auth");
      } else if (currentUser && pathname.startsWith("/auth/sign-in")) {
        navigate("/admin");
      }
    });
    return () => unsubscribe();
  }, [navigate, pathname]);

  return (
    <Routes>
      <Route path="*" element={<DefaultLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/auth" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
};

export default App;
