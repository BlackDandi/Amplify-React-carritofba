import logo from './logo.svg';
import * as React from "react";
import './App.css';
import Inicio from "./Paginas/Inicio";
import Carrito from "./Paginas/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './ui-components/NavBar';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { ActionCard, HeroLayout1, MarketingFooter, studioTheme } from "./ui-components";
import Swiper from "./Componentes/swiper";
Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/Carrito' element={<Carrito />} />
        </Routes>
      </BrowserRouter> 
      <MarketingFooter></MarketingFooter>
      
    </div>
  );
}

export default App;
