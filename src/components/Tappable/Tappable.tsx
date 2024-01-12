import {Clickable, ClickableProps} from "../Clickable/Clickable";
import {activeClass, DEFAULT_STATE_MODE, hoverClass, StateProps} from "./state";
import {useAdaptivity} from "../../hooks/useAdaptivity";
import {mergeCalls} from "../../utils/mergeCalls";
import {classNames} from "../../common";
import styles from "./Tappable.module.css";
import {SizeType} from "../../utils/adaptivity/constants";
import * as React from "react";

export interface TappableProps extends ClickableProps, StateProps {
    /**
     * Задает border-radius элементу
     * В режиме `auto` на маленьких экранах `border-radius: 0`, иначе определяется токеном `--vkui--size_border_radius--regular`
     */
    borderRadiusMode?: 'auto' | 'inherit';
}

const sizeXClassNames = {
    none: styles['Tappable--sizeX-none'],
    compact: styles['Tappable--sizeX-compact']
}

function hasPointerClassName(hasPointer: boolean | undefined) {
    switch (hasPointer) {
        case undefined:
            return styles['Tappable--hasPointer-none'];
        case false:
            return styles['Tappable--hasPointer-false']
    }
    return undefined
}

export const Tappable = ({
                             baseClassName,
                             borderRadiusMode = 'auto',
                             children,
                             hoverMode = DEFAULT_STATE_MODE,
                             activeMode = DEFAULT_STATE_MODE,
                             onPointerDown,
                             onPointerCancel,
                             ...restProps
                         }: TappableProps) => {

    const {sizeX = 'none', hasPointer} = useAdaptivity()

    const handlers = mergeCalls({
        onPointerDown,
        onPointerCancel
    })

    return (
        <Clickable
            baseClassName={classNames(
                baseClassName,
                styles["Tappable"],
                sizeX !== SizeType.REGULAR && sizeXClassNames[sizeX],
                borderRadiusMode === 'inherit' && styles['Tappable--borderRadiusInherit'],
                hasPointerClassName(hasPointer)
            )}
            hoverClassName={hoverClass(hoverMode)}
            activeClassName={activeClass(activeMode)}
            {...handlers}
            {...restProps}>
            {children}
        </Clickable>
    )
}