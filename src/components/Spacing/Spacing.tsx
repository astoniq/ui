import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export interface SpacingProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
    /**
     * Высота спэйсинга
     */
    size?: number;
}

export const Spacing = ({ size = 8, style: styleProp, ...restProps }: SpacingProps) => {
    const style: React.CSSProperties = {
        height: size,
        padding: `${size / 2}px 0`,
        ...styleProp,
    };

    return <RootComponent {...restProps} baseClassName={styles['Spacing']} style={style} />;
};