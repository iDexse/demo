import React from "react";

import Header from "./components/header/Header";
import "./App.scss";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <div className="App_sider"></div>
      <Header />
      <div className="App_main">

      <Product />
      </div>
    </div>
  );
}

export default App;
