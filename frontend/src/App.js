import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar/>
    </div>
  );
}

export default App;