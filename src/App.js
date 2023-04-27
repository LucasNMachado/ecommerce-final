import React from "react";
import "./App.css";
//RRD
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header/Header";

import { ItemsProvider } from "./components/Context/PosterContext";
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";

//Pages
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Contact from "./pages/Contact/Contact";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import MenuCollections from "./pages/MenuCollections/MenuCollections";
import Shop from "./pages/Shop/Shop";


const App = () => {
return( 
    <Router>
      <ItemsProvider>
        <div className="App">
          <Header />
          <ResponsiveNavigation />
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/store" element={<Store />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Detail/:id" element={<ItemDetail />} />
                <Route path="/Menu-Collections/:collections" element={<MenuCollections />} />
                <Route path="/Shop" element={<Shop />} />
              </Routes>
        </div>
      </ItemsProvider>
    </Router>
);
};

export default App;
