import {
    BREAKPOINTS,
    SizeTypeValues,
    VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP,
    ViewHeight,
    ViewHeightType,
    ViewWidth,
    ViewWidthType
} from "./constants";
import {CSSBreakpointsClassNames, MediaQueries} from "./types";
import {Exact} from "../../types";


export function getViewWidthByViewportWidth(viewportWidth: number) {
    if (viewportWidth >= BREAKPOINTS.DESKTOP) {
        return ViewWidth.DESKTOP
    }
    if (viewportWidth >= BREAKPOINTS.TABLET) {
        return ViewWidth.TABLET
    }
    if (viewportWidth >= BREAKPOINTS.SMALL_TABLET) {
        return ViewWidth.SMALL_TABLET
    }
    if (viewportWidth >= BREAKPOINTS.MOBILE) {
        return ViewWidth.MOBILE
    }
    return ViewWidth.SMALL_MOBILE;
}

export function getViewWidthByMediaQueries(mediaQueries: MediaQueries): ViewWidthType {
    if (mediaQueries.desktopPlus.matches) {
        return ViewWidth.DESKTOP;
    }
    if (mediaQueries.tablet.matches) {
        return ViewWidth.TABLET
    }
    if (mediaQueries.smallTablet.matches) {
        return ViewWidth.SMALL_TABLET
    }
    if (mediaQueries.mobile.matches) {
        return ViewWidth.MOBILE
    }
    return ViewWidth.SMALL_MOBILE
}

export function getViewHeightByViewportHeight(viewportHeight: number) {
    if (viewportHeight >= BREAKPOINTS.MEDIUM_HEIGHT) {
        return ViewHeight.MEDIUM;
    }
    if (viewportHeight >= BREAKPOINTS.MOBILE_LANDSCAPE_HEIGHT) {
        return ViewHeight.SMALL;
    }
    return ViewHeight.EXTRA_SMALL;
}

export function getViewHeightByMediaQueries(mediaQueries: MediaQueries): ViewHeightType {
    if (mediaQueries.mediumHeight.matches) {
        return ViewHeight.MEDIUM;
    }
    if (mediaQueries.mobileLandscapeHeight.matches) {
        return ViewHeight.SMALL;
    }
    return ViewHeight.EXTRA_SMALL;
}

export function getSizeX(viewWidth: ViewWidthType): SizeTypeValues {
    return viewWidth <= ViewWidth.MOBILE ? 'compact' : 'regular';
}

export function getSizeY(
    viewWidth: ViewWidthType,
    viewHeight: ViewHeightType,
    hasPointer: boolean,
): SizeTypeValues {
    if ((viewWidth >= ViewWidth.SMALL_TABLET && hasPointer) || viewHeight <= ViewHeight.EXTRA_SMALL) {
        return 'compact';
    }
    return 'regular';
}

export function viewWidthToClassName<T extends Partial<CSSBreakpointsClassNames>>(
    breakpointClassNames: Exact<CSSBreakpointsClassNames, T>,
    viewWidth: ViewWidthType | 'none' = 'none'
    ): string | null {

    if (viewWidth === 'none') {
        return breakpointClassNames.hasOwnProperty('none') ? breakpointClassNames['none']! : null;
    }

    const breakpoints: string[] = [];
    const breakpointName = VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP[viewWidth];

    if (breakpointClassNames.hasOwnProperty(breakpointName)) {
        breakpoints.push(breakpointClassNames[breakpointName]);
    }

    if (viewWidth >= ViewWidth.MOBILE) {
        if (breakpointClassNames.hasOwnProperty('mobilePlus')) {
            breakpoints.push(breakpointClassNames['mobilePlus']!);
        }
    }

    if (viewWidth >= ViewWidth.SMALL_TABLET) {
        if (breakpointClassNames.hasOwnProperty('smallTabletPlus')) {
            breakpoints.push(breakpointClassNames['smallTabletPlus']!);
        }
    } else {
        if (breakpointClassNames.hasOwnProperty('smallTabletMinus')) {
            breakpoints.push(breakpointClassNames['smallTabletMinus']!);
        }
    }

    if (viewWidth >= ViewWidth.TABLET) {
        if (breakpointClassNames.hasOwnProperty('tabletPlus')) {
            breakpoints.push(breakpointClassNames['tabletPlus']!);
        }
    } else {
        if (breakpointClassNames.hasOwnProperty('tabletMinus')) {
            breakpoints.push(breakpointClassNames['tabletMinus']!);
        }
    }

    return breakpoints.length > 0 ? breakpoints.join(' ') : null;
}