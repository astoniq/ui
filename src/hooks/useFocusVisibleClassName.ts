import styles from "../styles/focusVisible.module.css";
import {LiteralUnion} from "../types";
import {classNames} from "../common";

export const focusVisiblePresetModeClassNames = {
    inside: styles['-focus-visible--mode-inside'],
    outside: styles['-focus-visible--mode-outside']
}

type FocusVisiblePresetMode = keyof typeof focusVisiblePresetModeClassNames;

export type FocusVisibleMode = LiteralUnion<FocusVisiblePresetMode, string>;

const isPresetMode = (mode: FocusVisibleMode): mode is FocusVisiblePresetMode =>
    mode === 'inside' || mode === 'outside';

export interface FocusVisibleModeProps {
    focusVisibleMode?: FocusVisibleMode
}

export interface UseFocusVisibleClassNameProps {
    focusVisible?: boolean;
    mode?: FocusVisibleMode
}

export function useFocusVisibleClassName({
                                             focusVisible = false,
                                             mode = 'inside'
                                         }: UseFocusVisibleClassNameProps) {
    const modeClassName = isPresetMode(mode) ? focusVisiblePresetModeClassNames[mode] : mode;
    return classNames(
        styles['-focus-visible'],
        focusVisible && styles['-focus-visible--focused'],
        focusVisible && modeClassName
    )
}