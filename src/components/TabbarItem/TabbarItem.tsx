import * as React from 'react';
import {HasComponent, HasRootRef} from "../../types";
import {usePlatform} from "../../hooks/usePlatform";
import {RootComponent} from "../RootComponent/RootComponent";
import {classNames} from "../../common";
import styles from './TabbarItem.module.css';
import {hasReactNode} from "../../common/node";
import {noop} from "../../common/functions";
import {Tappable} from "../Tappable/Tappable";

export interface TabbarItemProps
    extends React.AllHTMLAttributes<HTMLElement>,
        HasRootRef<HTMLElement>,
        HasComponent {
    selected?: boolean;
    /**
     * Текст рядом с иконкой
     */
    text?: React.ReactNode;
    /**
     * Индикатор над иконкой. Принимает `<Badge mode="prominent" />` или `<Counter size="s" mode="prominent" />`
     */
    indicator?: React.ReactNode;
}


export const TabbarItem = ({
                               children,
                               selected,
                               indicator,
                               text,
                               href,
                               Component = href ? 'a' : 'button',
                               disabled,
                               ...restProps
                           }: TabbarItemProps) => {
    const platform = usePlatform();

    return (
        <RootComponent
            Component={Component}
            {...restProps}
            disabled={disabled}
            href={href}
            baseClassName={classNames(
                styles['TabbarItem'],
                platform === 'ios' && styles['TabbarItem--ios'],
                platform === 'android' && styles['TabbarItem--android'],
                selected && styles['TabbarItem--selected'],
            )}
        >
            <Tappable
                role="presentation"
                disabled={disabled}
                activeMode={platform === 'ios' ? styles['TabbarItem__tappable--active'] : 'background'}
                activeEffectDelay={platform === 'ios' ? 0 : 300}
                hasHover={false}
                className={styles['TabbarItem__tappable']}
                onClick={noop}
            />
            <div className={styles['TabbarItem__in']}>
                <div className={styles['TabbarItem__icon']}>
                    {children}
                    <div className="vkuiInternalTabbarItem__label">
                        {hasReactNode(indicator) && indicator}
                    </div>
                </div>
                {text && (
                    text
                )}
            </div>
        </RootComponent>
    );
}