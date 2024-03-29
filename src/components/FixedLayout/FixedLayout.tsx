import * as React from 'react';
import styles from './FixedLayout.module.css';
import {classNames} from "../../common";
import {HTMLAttributesWithRootRef} from "../../types";
import {usePlatform} from "../../hooks/usePlatform";
import {useDom} from "../../utils/dom";
import {useExternRef} from "../../hooks/useExternRef";
import {SplitColContext} from "../SplitCol/SplitColContext";
import {useGlobalEventListener} from "../../hooks/useGlobalEventListener";
import {RootComponent} from "../RootComponent/RootComponent";


const stylesVertical = {
    top: styles['FixedLayout--vertical-top'],
    bottom: classNames(
        styles['FixedLayout--vertical-bottom'],
        'vkuiInternalFixedLayout--vertical-bottom',
    ),
};

export interface FixedLayoutProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
    vertical?: 'top' | 'bottom';
    /**
     * Это свойство определяет, будет ли фон компонента окрашен в цвет фона контента.
     * Это часто необходимо для фиксированных кнопок в нижней части экрана.
     */
    filled?: boolean;
    /**
     * Всегда соответствовать ширине родителя.
     * Ширина пересчитывается по событию `window` `resize`.
     */
    useParentWidth?: boolean;
}

export interface FixedLayoutState {
    position: 'absolute' | null;
    top: number;
    bottom: number;
    width: string;
}

export const FixedLayout = ({
                                children,
                                style,
                                vertical,
                                getRootRef,
                                filled,
                                className,
                                useParentWidth,
                                ...restProps
                            }: FixedLayoutProps) => {
    const platform = usePlatform();
    const ref = useExternRef(getRootRef);
    const [width, setWidth] = React.useState<string | undefined>(undefined);
    const { window } = useDom();
    const { colRef } = React.useContext(SplitColContext);

    const doResize = () => {
        if (useParentWidth && ref.current) {
            const parentWidth = ref.current.parentElement?.getBoundingClientRect().width;
            setWidth(parentWidth ? `${parentWidth}px` : undefined);
        } else if (colRef?.current) {
            const computedStyle = getComputedStyle(colRef.current);

            setWidth(
                `${
                    colRef.current.clientWidth -
                    parseFloat(computedStyle.paddingLeft) -
                    parseFloat(computedStyle.paddingRight)
                }px`,
            );
        } else {
            setWidth(undefined);
        }
    };
    React.useEffect(doResize, [colRef, platform, ref, useParentWidth]);
    useGlobalEventListener(window, 'resize', doResize);

    return (
        <RootComponent
            {...restProps}
            className={classNames(
                styles['FixedLayout'],
                platform === 'ios' && 'vkuiInternalFixedLayout--ios',
                filled && styles['FixedLayout--filled'],
                vertical && stylesVertical[vertical],
                className,
            )}
            style={{ ...style, width }}
        >
            {children}
        </RootComponent>
    );
};
