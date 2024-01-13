import React, { useState, useEffect, } from 'react';
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import Foto from "../Imagenes/NFTS1.jpg"
export default function Comprar() {
    const [Total, setPrecio] = useState(parseInt(localStorage.getItem('precioTotal')) || 0);
    const contadorTarjeta1 = parseInt(localStorage.getItem('contadorTarjeta1'));
    const contadorTarjeta2 = parseInt(localStorage.getItem('contadorTarjeta2'));
    const contadorTarjeta3 = parseInt(localStorage.getItem('contadorTarjeta3'));
    const contadorTarjeta4 = parseInt(localStorage.getItem('contadorTarjeta4'));
    const contadorTarjeta5 = parseInt(localStorage.getItem('contadorTarjeta5'));
    const contadorTarjeta6 = parseInt(localStorage.getItem('contadorTarjeta6'));
    useEffect(() => {

        setPrecio((contadorTarjeta1*1000)+(contadorTarjeta2*2000)+
        (contadorTarjeta3*6000)+(contadorTarjeta4*9000)+(contadorTarjeta5*500)+
        (contadorTarjeta6*200))
        
      }, [contadorTarjeta1,contadorTarjeta2,contadorTarjeta3,contadorTarjeta4,contadorTarjeta5,contadorTarjeta6]);
      

    
  
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
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="grey"
        borderRadius="35px"
      >
        
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
              children="Total"
            ></Text>
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
                key={Total}
              >
                ${Total}
          </Text>
        </Flex>   
        
        </Flex>
      </Flex>
      
    </Flex>
      </>
    );
  }