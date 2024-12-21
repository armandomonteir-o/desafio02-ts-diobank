import { Routes, Route, Navigate } from "react-router-dom";
import { Conta } from "./pages/Conta";
import { ContaInfo } from "./pages/ContaInfo";
import Home from "./pages/Home";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

export const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route
        path="/"
        element={!isLoggedIn ? <Home /> : <Navigate to="/conta/:id" />}
      />

      <Route path="conta/:id" element={<Conta />} />

      <Route path="/infoconta" element={<ContaInfo />} />
    </Routes>
  );
};
