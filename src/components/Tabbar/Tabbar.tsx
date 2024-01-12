import * as React from 'react';
import {HTMLAttributesWithRootRef} from "../../types";
import {usePlatform} from "../../hooks/usePlatform";
import {RootComponent} from "../RootComponent/RootComponent";
import {classNames} from "../../common";
import styles from './Tabbar.module.css';

export interface TabbarProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
    /**
     * Флаг, который скрывает тень (Android) или границы (iOS)
     */
    plain?: boolean;
    /**
     * Задает расположение элементов (вертикальное/горизонтальное)
     */
    mode?: 'vertical' | 'horizontal' | 'auto';
}

const getItemsLayoutClassName = (
    itemsLayout: TabbarProps['mode'],
    children: TabbarProps['children'],
): string => {
    switch (itemsLayout) {
        case 'horizontal':
            return 'vkuiInternalTabbar--layout-horizontal';
        case 'vertical':
            return 'vkuiInternalTabbar--layout-vertical';
        default:
            return React.Children.count(children) > 2
                ? getItemsLayoutClassName('vertical', [])
                : getItemsLayoutClassName('horizontal', []);
    }
};


export const Tabbar = ({ plain = false, mode, ...restProps }: TabbarProps) => {
    const platform = usePlatform();

    return (
        <RootComponent
            baseClassName={classNames(
                'vkuiInternalTabbar',
                styles['Tabbar'],
                platform === 'ios' && styles['Tabbar--ios'],
                getItemsLayoutClassName(mode, restProps.children),
                !plain && styles['Tabbar--shadow'],
            )}
            {...restProps}
        />
    );
};