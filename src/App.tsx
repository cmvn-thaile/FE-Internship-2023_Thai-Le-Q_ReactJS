import React from "react";
import Header from "./shared/components/Header";
import { index as Home } from "./app/pages/home"; 
import Footer from "./shared/components/Footer";
function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
