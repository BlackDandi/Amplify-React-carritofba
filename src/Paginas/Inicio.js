
import * as React from "react";
import '../App.css';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { HeroLayout1} from "../ui-components";
import Swiper from "../Componentes/swiper";
import elemento2 from "../ui-components/HeroLayout1";

Amplify.configure(awsconfig);
function Inicio() {
  return (
    
    <div className="Inicio"> 
      <HeroLayout1></HeroLayout1>
      <Swiper id={elemento2}></Swiper>

    </div>
    
  );
}
export default Inicio;