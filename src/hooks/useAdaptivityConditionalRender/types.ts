import {CSSBreakpoints} from "../../utils/adaptivity/types";
import {SizeTypeValues} from "../../utils/adaptivity/constants";

export type ForcedHiddenByAdaptivityProviderType = false; // имеется ввиду, что зашили значение, например, <AdaptivityProvider sizeY="regular" />

export type ElementProps = { className: string };

/* ================================================================================================================== */

export type AdaptiveSizeType = Record<
    SizeTypeValues,
    ForcedHiddenByAdaptivityProviderType | ElementProps
>;

/* ================================================================================================================== */

export type ViewWidthCSSBreakpoints = Extract<CSSBreakpoints, 'tabletMinus' | 'tabletPlus'>;

export type AdaptiveViewWidth = Record<
    ViewWidthCSSBreakpoints,
    ForcedHiddenByAdaptivityProviderType | ElementProps
>;

/* ================================================================================================================== */

export type DeviceTypeCSSBreakpoints = 'mobile' | 'desktop';

export type AdaptiveDeviceType = Record<
    DeviceTypeCSSBreakpoints,
    ForcedHiddenByAdaptivityProviderType | ElementProps
>;

/* ================================================================================================================== */

export interface UseAdaptivityConditionalRender {
    sizeX: AdaptiveSizeType;
    sizeY: AdaptiveSizeType;
    viewWidth: AdaptiveViewWidth;
    deviceType: AdaptiveDeviceType;
}