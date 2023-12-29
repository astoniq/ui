import {LiteralUnion} from "../../types";
import styles from "*.module.css";

type StateMode = 'opacity' | 'background' | 'none';
export type StateModeLiteral = LiteralUnion<StateMode, string>;

export interface StateProps {
    /**
     * Стиль подсветки active-состояния. Если передать произвольную строку, она добавится как css-класс во время active
     */
    activeMode?: StateModeLiteral;

    /**
     * Стиль подсветки hover-состояния. Если передать произвольную строку, она добавится как css-класс во время hover
     */
    hoverMode?: StateModeLiteral;
}

export const DEFAULT_STATE_MODE: StateMode = 'background';

const stylesHovered: Record<string, string> = {
    background: styles['Tappable--hovered-background'],
    opacity: styles['Tappable-hovered-opacity'],
    none: ''
}

export function hoverClass(hoverMode: StateModeLiteral = DEFAULT_STATE_MODE) {
    const presetClass = stylesHovered[hoverMode] as string | undefined;

    return presetClass !== undefined ? presetClass : hoverMode;
}

const stylesActivated: Record<string, string> = {
    background: styles['Tappable--activated-background'],
    opacity: styles['Tappable--activated-opacity'],
    none: ''
}

export function activeClass(activeMode: StateModeLiteral = DEFAULT_STATE_MODE) {
    const presetClass = stylesActivated[activeMode] as string | undefined;
    return presetClass !== undefined ? presetClass : activeMode;
}