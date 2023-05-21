import React from "react";
import "./App.css";
//RRD
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header/Header";

import  ItemsProvider from "./components/Context/PosterContext";
import ResponsiveNavigation from "./components/ResponsiveNavigation/ResponsiveNavigation";

//Pages
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";

import ItemDetail from "./pages/ItemDetail/ItemDetail";
import MenuCollections from "./pages/MenuCollections/MenuCollections";
import Shop from "./pages/Shop/Shop";
import Cartwidget from "./pages/Cart/Cartwidget";



const App = () => {
return( 
    <Router>
      <ItemsProvider>
        <div className="App">
          <Header />
          <ResponsiveNavigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/store" element={<Store />} />
               
                <Route path="/detail/:id" element={<ItemDetail />} />
                <Route path="/categories/:collections" element={<MenuCollections />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cartcontent" element={<Cartwidget />} />
               </Routes>
        </div>
      </ItemsProvider>
    </Router>
);
};

export default App;
