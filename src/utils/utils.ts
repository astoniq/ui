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