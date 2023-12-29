import * as React from 'react';
import { Children, isValidElement } from 'react';

export const childToString = (child?: React.ReactNode): string => {
    if (typeof child === 'undefined' || child === null || typeof child === 'boolean') {
        return '';
    }

    if (JSON.stringify(child) === '{}') {
        return '';
    }

    return (child as number | string).toString();
};

export const getTextFromChildren = (children: React.ReactNode | React.ReactNode[]): string => {
    if (!(children instanceof Array) && !isValidElement(children)) {
        return childToString(children);
    }

    return <string>Children.toArray(children).reduce((text: string, child: React.ReactNode): string => {
        let newText = '';

        const isValidElementResult = isValidElement<{ children?: React.ReactNode | React.ReactNode[] }>(
            child,
        );
        const hasChildren = isValidElementResult && 'children' in child.props;

        if (isValidElementResult && hasChildren) {
            newText = getTextFromChildren(child.props.children);
        } else if (isValidElementResult && !hasChildren) {
            newText = '';
        } else {
            newText = childToString(child);
        }

        return text.concat(newText);
    }, '');
};