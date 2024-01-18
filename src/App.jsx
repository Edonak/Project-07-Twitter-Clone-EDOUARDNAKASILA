import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./pages/profil.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <>
    <BrowserRouter>    
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:author" element={<Profil />}/>
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  );
}