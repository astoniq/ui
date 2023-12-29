import {ValuesOfObject} from "../../types";

export {BREAKPOINTS, MEDIA_QUERIES} from '../../shared/breakpoints';

/**
 * Public API.
 * Брейкпоинты на ширину.
 *
 * > Note: Используется порядковый номер вместо значений в пикселях... ¯\_(ツ)_/¯
 */
export const ViewWidth = {
   SMALL_MOBILE: 1,
   MOBILE: 2,
   SMALL_TABLET: 3,
   TABLET: 4,
   DESKTOP: 5
} as const;

export type ViewWidthType = ValuesOfObject<typeof ViewWidth>;

/**
 * Public API.
 * Брейкпоинт на высоту.
 *
 * > Note: Используется порядковый номер вместо значений в пикселях... ¯\_(ツ)_/¯
 */
export const ViewHeight = {
    EXTRA_SMALL: 1,
    SMALL: 2,
    MEDIUM: 3,
};

export type ViewHeightType = ValuesOfObject<typeof ViewHeight>;

export const SizeType = {
    COMPACT: 'compact',
    REGULAR: 'regular'
} as const;

export type SizeTypeValues = ValuesOfObject<typeof SizeType>;

export const VIEW_WIDTH_TO_CSS_BREAKPOINT_MAP = {
    [ViewWidth.SMALL_MOBILE]: 'smallMobileMinus',
    [ViewWidth.MOBILE]: 'mobile',
    [ViewWidth.SMALL_TABLET]: 'smallTablet',
    [ViewWidth.TABLET]: 'tablet',
    [ViewWidth.DESKTOP]: 'desktopPlus',
} as const;