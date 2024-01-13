import React, { useState, useEffect } from "react";
import { Button,Flex } from "@aws-amplify/ui-react";
import Comprar from "../Componentes/comprar";
import Articulo1 from "../Componentes/articulo1";
import Articulo2 from "../Componentes/articulo2";
import Articulo3 from "../Componentes/articulo3";
import Articulo4 from "../Componentes/articulo4";
import Articulo5 from "../Componentes/articulo5";
import Articulo6 from "../Componentes/articulo6";
function Carrito() {
  const contadorTarjeta1 = parseInt(localStorage.getItem('contadorTarjeta1'));
  const contadorTarjeta2 = parseInt(localStorage.getItem('contadorTarjeta2'));
  const contadorTarjeta3 = parseInt(localStorage.getItem('contadorTarjeta3'));
  const contadorTarjeta4 = parseInt(localStorage.getItem('contadorTarjeta4'));
  const contadorTarjeta5 = parseInt(localStorage.getItem('contadorTarjeta5'));
  const contadorTarjeta6 = parseInt(localStorage.getItem('contadorTarjeta6'));
  const [updateCounter, setUpdateCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setUpdateCounter((prevCounter) => prevCounter + 1);
    }, 1);
    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Carrito">
     
     {contadorTarjeta1 > 0 && <Articulo1/>}
     {contadorTarjeta2 > 0 && <Articulo2/>}
     {contadorTarjeta3 > 0 && <Articulo3/>}
     {contadorTarjeta4 > 0 && <Articulo4/>}
     {contadorTarjeta5 > 0 && <Articulo5/>}
     {contadorTarjeta6 > 0 && <Articulo6/>}
      <Comprar ></Comprar>
     
    </div>
  );
}

export default Carrito;