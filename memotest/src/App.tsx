import React from "react";
import Juego from "./Juego";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route element={<Juego />} path="/juego" />
    </Routes>
  );
}
