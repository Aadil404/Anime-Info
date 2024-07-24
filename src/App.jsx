import React from "react";
import Popular from "./Components/Popular";
import { useGlobalContext } from "./Context/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem";
import Homepage from "./Components/Homepage";
import Characters from "./Components/Characters";
import Footer from "./Components/Footer";

function App() {
  const global = useGlobalContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/anime/:id" element={<AnimeItem />}></Route>
        <Route path="/character/:id" element={<Characters />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
