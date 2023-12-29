import {SizeTypeValues, ViewHeightType, ViewWidthType} from "../../utils/adaptivity/constants";
import * as React from "react";

export interface SizeProps {
    sizeX?: SizeTypeValues;
    sizeY?: SizeTypeValues;
}

export interface AdaptivityProps extends SizeProps {
    viewWidth?: ViewWidthType;
    viewHeight?: ViewHeightType;
    hasPointer?: boolean;
    hasHover?: boolean;
}

export const AdaptivityContext = React.createContext<AdaptivityProps>({});