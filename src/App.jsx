// App.jsx

import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

import NavBar from "./components/NavBar";
import QuestionsContext from "./context/questions/QuestionsContext";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassworrd"; // Consider renaming file & component to `ResetPassword`
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Users from "./pages/Users";
import Category from "./pages/Category";

const App = () => {
  const { mode, progress, error, setError } = useContext(QuestionsContext);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timer = setTimeout(() => {
        setShowError(false);
        setError(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [error, setError]);

  return (
    <div className={`${mode} min-h-screen bg-gray-100 dark:bg-slate-700 transition duration-500`}>
      <Router>
        <NavBar className="flex-wrap" />
        <LoadingBar color={mode === "dark" ? "#FF7518" : "#f11946"} progress={progress} />

        {showError && (
          <div className="error-container flex justify-center items-start fixed top-0 left-0 w-full z-50 pointer-events-none">
            <div className="bg-gray-50 border-sky-400 text-red-600 dark:bg-slate-700 border dark:border-orange-500 dark:text-gray-300 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-md p-4 mt-7 text-center shadow-md transition-opacity duration-500">
              {error}
            </div>
          </div>
        )}

        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/roles" element={<Users />} />
          <Route path="/:id" element={<Category />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
