import React, { useState, useEffect } from "react";
import Tarjeta1 from "../ui-components/Tarjeta1";

function Carrito() {
  // Obtener el contador del almacenamiento local al inicio
  const contadorTarjeta1 = parseInt(localStorage.getItem('contadorTarjeta1'), 10) || 0;

  // Lógica para decidir si mostrar Tarjeta1 basado en el contador
  const mostrarTarjeta1 = contadorTarjeta1 > 0;

  return (
    <div className="Carrito">
      
    </div>
  );
}

export default Carrito;