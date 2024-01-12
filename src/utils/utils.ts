import * as React from 'react';

type ExcludeKeysWithUndefined<T> = {
    [P in keyof T]?: Exclude<T[P], undefined>;
};

export const excludeKeysWithUndefined = <T extends Record<string | number | symbol, any>>(
    obj: T,
): ExcludeKeysWithUndefined<T> => {
    const filteredObj: ExcludeKeysWithUndefined<T> = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] !== undefined) {
            filteredObj[key] = obj[key];
        }
    }
    return filteredObj;
};

export function setRef<T>(element: T, ref?: React.Ref<T>): void {
    if (ref) {
        if (typeof ref === 'function') {
            ref(element);
        } else {
            (ref as React.MutableRefObject<T>).current = element;
        }
    }
}