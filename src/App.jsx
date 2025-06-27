import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./Page";
import { RecoilRoot } from "recoil";
import { ReportPage } from "./site/Report-page/report";
import Loader from "./site/Components/screeLoading"
export default function App() {

  return (
    <>
     {/* <ReportPage/> */}
     
    <RecoilRoot> 
      <Page/>
    </RecoilRoot>
    </>
  )
}


