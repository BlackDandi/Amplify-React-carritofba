/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import { getOverrideProps, useNavigateAction } from "./utils";
import {
  Button,
  Flex,
  Icon,
  Image,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import CheckPoint from "../Imagenes/Logo.png";
import Flexcursor from "../Componentes/estilos.module.css"
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const Botoncarrito = () => {
    window.location.reload();
  };
  const BotonLogo= useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <Flex
      gap="20px"
      direction="row"
      display="flex"
      width="100%"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="24px 32px 24px 32px"
      backgroundColor="grey"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        style={{cursor:"pointer"}}
        gap="2px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        cursor="pointer"
        {...getOverrideProps(overrides, "Logo29767073")}
      >
        <Image
          width="64px"
          height="64px"
          viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          src={CheckPoint}
          position="relative"
          onClick={() => {
            BotonLogo();
          } }
          {...getOverrideProps(overrides, "Button")}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          textTransform="capitalize"
          lineHeight="24.204544067382812px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CheckPoitn"
          cursor="pointer"
          onClick={() => {
            BotonLogo();
          } }
          {...getOverrideProps(overrides, "Button")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="NFTS"
          {...getOverrideProps(overrides, "Dashboard")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="VideoJuegos"
          {...getOverrideProps(overrides, "Jobs")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Applicaciones"
          
          {...getOverrideProps(overrides, "Applicants")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Licencias de Software"
          {...getOverrideProps(overrides, "Company")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        
        <View
          width="40px"
          height="30px"
          display="flex"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Button
            onClick={() => {
              Botoncarrito();
            } }
            >
          <Icon
            width="16px"
            height="19.5px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            paths={[
              {
                d: "M14 4L12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4L2 4C0.9 4 0 4.9 0 6L0 18C0 19.1 0.9 20 2 20L14 20C15.1 20 16 19.1 16 18L16 6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4L6 4C6 2.9 6.9 2 8 2ZM14 18L2 18L2 6L4 6L4 8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8L6 6L10 6L10 8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8L12 6L14 6L14 18Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 8.33%)" },
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="10.42%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
          </Button>     
        </View>
        
      </Flex>
    </Flex>
  );
}
