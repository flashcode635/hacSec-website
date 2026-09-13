import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Page from "./Page";
import { RecoilRoot } from "recoil";
import AuthPage from './site/signUpAuth/front';
export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Navigate to="/Learn_X" replace />} />
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/dashboard/*" element={<Navigate to="/Learn_X" replace />} />
          <Route path="/*" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
