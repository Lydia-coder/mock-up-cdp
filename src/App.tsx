import React, { useState, useEffect } from "react";
import Home from "./components/commen/Home";
import Receipt from "./components/commen/Receipt";

import "./App.css";

function App() {
  const [redirect, setRedirect] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setRedirect(false);
    }, 3000);
  }, [redirect]);
  return <div className="App">{redirect ? <Home /> : <Receipt />}</div>;
}

export default App;
