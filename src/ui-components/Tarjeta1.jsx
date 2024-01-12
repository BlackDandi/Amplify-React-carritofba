/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { getOverrideProps } from "./utils";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
import Foto from "../Imagenes/NFTS1.jpg"
export default function Tarjeta1(props) {
  const { onComprarClick,agregarTarjeta, overrides, ...rest } = props;
  const [contador1, setContador] = useState(0);
  const incrementarContador = () => {
    setContador(contador1 + 1);
  };
  useEffect(() => {
    const contadorGuardado = localStorage.getItem('contador1');
    const contadorGuardadoInt = parseInt(contadorGuardado);
    console.log("Valor recuperado:", contadorGuardadoInt);
    
  }, []);
  
  useEffect(() => {
    localStorage.setItem('contadorTarjeta1', contador1.toString());
    console.log("Contador actualizado:", contador1);
    
  }, [contador1]);
 
  

  
  
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Tarjeta1")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ActionCard")}
      >
        <Image
          width="unset"
          height="408px"
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
          {...getOverrideProps(overrides, "image")}
        ></Image>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="16px 16px 16px 16px"
          {...getOverrideProps(overrides, "Card Area")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Main Text")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
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
              {...getOverrideProps(overrides, "NFTS 1")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Nfts de gran valor y exclusividad."
              {...getOverrideProps(
                overrides,
                "Nfts de gran valor y exclusividad."
              )}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
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
            children="$ 1000"
            {...getOverrideProps(overrides, "$ 1000")}
          ></Text>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="large"
            isDisabled={false}
            variation="primary"
            children="Comprar"
            onClick={
              incrementarContador
            }
            
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
