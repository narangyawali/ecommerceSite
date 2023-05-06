import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Details from "./page/Details";
import Footer from "./components/footer";
import About from "./page/About";
import Cart from "./page/Cart";
import HomePage from "./page/HomePage";
import { ContextProvider } from "./context/context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <ContextProvider>

      <Header />

      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/details" element={<Details />}></Route>
      </Routes>

      <Footer />
    </ContextProvider>
    </>
  );
}

export default App;
