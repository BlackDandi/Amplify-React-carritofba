import React, { useState, useEffect,onValueChange } from 'react';
import {Button,Flex, Image, Text } from "@aws-amplify/ui-react";
import Foto from "../Imagenes/ss.jpg"
export default function Articulo3() {
  const [contador, setContador] = useState(parseInt(localStorage.getItem('contadorTarjeta3')) || 0);
  const [precio3, setPrecio] = useState(parseInt(1000) || 0);
  // Actualizar localStorage cuando cambia el valor del contador
  useEffect(() => {
    localStorage.setItem('contadorTarjeta3', contador);
    setPrecio(precio3 => 6000 * contador);
    localStorage.setItem('contadorprecio3', precio3);
  }, [contador]);
  // Función para incrementar el contador
  const añadir = () => {
    setContador(contador => contador+ 1);
  };
  const quitar = () => {
    setContador(contador => contador -1);
  };
  const eliminar = () => {
    setContador(contador => 0);
  };
  
  
    return (
      <>
    <Flex
      gap="0"
      direction="row"
      width="100%"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="20px 20px 20px 20px"
      backgroundColor="white"
      borderRadius="35px"
      
    >
      <Flex
        gap="100px"
        direction="row"
        width="100%"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="grey"
        borderRadius="35px"
      >
        <Image
          width="200px"
          height="200px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={Foto}
          borderRadius="35px"
        ></Image>
        <Flex
          gap="30px"
          display="flex"
          direction="row"
          alignContent="center"
          justifyContent="center"
          width="unset"
          height="unset"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 16px 16px 16px"
         
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
           
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Xbox series-s"
            ></Text>
          </Flex>
          <Flex>
        <Button
         width="100px"
         height="40px"
         fontSize="40px"
         shrink="0"
         alignSelf="stretch"
         size="large"
         isDisabled={false}
         variation="primary"
         onClick={quitar}
         children="-"
        >
        </Button>
        </Flex>
        <Flex   
        >
          <Text
                fontFamily="Inter"
                fontSize="30px"
                fontWeight="700"
                color="rgba(13,26,38,1)"
                lineHeight="20px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                
              >
                {contador}
          </Text>
        </Flex>
        <Flex>
        <Button
         width="100px"
         height="40px"
         fontSize="40px"
         shrink="0"
         alignSelf="stretch"
         size="large"
         isDisabled={false}
         variation="primary"
         onClick={añadir}
         children="+"
        >
        </Button>
        </Flex>    
        <Flex>
        <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="NFTS 1"
            >
              ${precio3}
        </Text>
        </Flex>
        <Flex>
        <Button
          width="100px"
          height="40px"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          onClick={eliminar}
          children="X"
          >
        </Button>
        </Flex>
        </Flex>
      </Flex>
      
    </Flex>
      </>
    );
  }