import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./Page";
import { RecoilRoot } from "recoil";
import { ReportPage } from "./site/Report-page/report";
import AuthPage from "./site/signUpAuth/front";
import LoaderJnr from './LoadingScreen';

export default function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
           <Route path='/quiz' element={<LoaderJnr/>}/>
          <Route path='/tools' element={<LoaderJnr/>}/>
          <Route path="/*" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}
