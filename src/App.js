import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.scss";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
      </Route>
    </Routes>
  );
}

export default App;