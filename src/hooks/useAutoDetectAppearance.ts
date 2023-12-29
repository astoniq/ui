import {Appearance, AppearanceType} from "../utils/appearance";
import {useDom} from "../utils/dom";
import * as React from "react";
import {useIsomorphicLayoutEffect} from "./useIsomorphicLayoutEffect";
import {noop} from "../common/functions";
import {matchMediaListAddListener, matchMediaListRemoveListener} from "../utils/matchMedia";

export const useAutoDetectAppearance = (appearanceProp?: AppearanceType): AppearanceType => {
    const {window} = useDom();

    const [appearance, setAppearance] = React.useState<AppearanceType>(
        appearanceProp || Appearance.LIGHT
    )

    useIsomorphicLayoutEffect(() => {
        if (appearanceProp) {
            setAppearance(appearanceProp)
            return noop;
        }

        const mediaQuery = window ? window.matchMedia('(prefers-color-scheme: dark)') : undefined;

        if (!mediaQuery) {
            return noop;
        }

        const check = (event: MediaQueryList | MediaQueryListEvent) => {
            setAppearance(event.matches ? Appearance.DARK : Appearance.LIGHT)
        }

        check(mediaQuery);
        matchMediaListAddListener(mediaQuery, check)
        return () => matchMediaListRemoveListener(mediaQuery, check)
    }, [window, appearanceProp]);

    return appearance;
}