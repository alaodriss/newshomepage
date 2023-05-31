import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/nav/Header";
import './sass/main.scss';
import Home from "./pages/Home";
function App() {
  return (
  <>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/home" exect element={<Home />} />
    </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
