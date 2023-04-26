import { useState } from "react";
import React from "react";
import Header from "./components/header";
import Details from "./components/detail";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Details />
      <Footer />
    </>
  );
}

export default App;
