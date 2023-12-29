import {AdaptivityContext, AdaptivityProps} from "./AdaptivityContext";
import {HasChildren} from "../../types";
import * as React from "react";
import {ViewHeight, ViewWidth} from "../../utils/adaptivity/constants";
import {hasMouse} from "../../common/InputUtils";

export interface AdaptivityProviderProps extends AdaptivityProps, HasChildren {}

export const AdaptivityProvider = ({
    viewWidth,
    viewHeight,
    sizeX: sizeXProp,
    sizeY: sizeYProp,
    hasPointer,
    hasHover,
    children
}: AdaptivityProviderProps) => {
    const adaptivity = React.useMemo(() => {
        const nextProps: AdaptivityProps = {
            viewHeight,
            viewWidth,
            sizeX: sizeXProp,
            sizeY: sizeYProp,
            hasHover,
            hasPointer
        }

        if (sizeXProp === undefined && viewWidth !== undefined) {
            if (viewWidth <= ViewWidth.MOBILE) {
                nextProps.sizeX = 'compact';
            } else {
                nextProps.sizeX = 'regular';
            }
        }

        if (sizeYProp === undefined && viewWidth !== undefined && viewHeight !== undefined) {
            if (
                (viewWidth >= ViewWidth.SMALL_TABLET && hasMouse) ||
                viewHeight <= ViewHeight.EXTRA_SMALL
            ) {
                nextProps.sizeY = 'compact';
            } else {
                nextProps.sizeY = 'regular';
            }
        }
        return nextProps;

    },  [viewWidth, viewHeight, sizeXProp, sizeYProp, hasPointer, hasHover])

    return <AdaptivityContext.Provider value={adaptivity}>{children}</AdaptivityContext.Provider>
}