import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Separator.module.css';
import {classNames} from "../../common";

export interface SeparatorProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
    /**
     * С этим свойством компонент не будет иметь отступы слева и справа
     */
    wide?: boolean;
}

export const Separator = ({ wide, ...restProps }: SeparatorProps) => (
    <RootComponent
        {...restProps}
        baseClassName={classNames(styles['Separator'], !wide && styles['Separator--padded'])}
    >
        <hr className={styles['Separator__in']} />
    </RootComponent>
);