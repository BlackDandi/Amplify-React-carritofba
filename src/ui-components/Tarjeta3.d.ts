/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Tarjeta3OverridesProps = {
    Tarjeta3?: PrimitiveOverrideProps<FlexProps>;
    ActionCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Xbox-series s"?: PrimitiveOverrideProps<TextProps>;
    "Consola modelo-s."?: PrimitiveOverrideProps<TextProps>;
    "$ 6000"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type Tarjeta3Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Tarjeta3OverridesProps | undefined | null;
}>;
export default function Tarjeta3(props: Tarjeta3Props): React.ReactElement;
