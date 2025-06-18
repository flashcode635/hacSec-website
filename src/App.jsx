import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Page from "./Page";
import { RecoilRoot } from "recoil";


export default function App() {

  return (
    <>
    <RecoilRoot> 
      <Page/>
    </RecoilRoot>
    </>
  )
}


