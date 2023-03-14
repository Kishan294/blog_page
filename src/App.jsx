import React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="px-4 bg-black w-full lg:px-40">
      {/* <Header /> */}
      <HomePage />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
