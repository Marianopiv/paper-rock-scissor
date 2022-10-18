import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DynamicPage from "../components/dynamicPage/DynamicPage";
import GlobalContext from "../context/GlobalContext";
import Home from "../home/Home";
import GlobalLayout from "./GlobalLayout";

const Rutas = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayout />}>
            <Route index element={<Home />} />
            <Route path=":option" element={<DynamicPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Rutas;
