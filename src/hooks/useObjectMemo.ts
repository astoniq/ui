import {isEqual} from "../common/equal";
import * as React from "react";

export function useObjectMemo<T>(object: T): T {
    const cache = React.useRef(object);
    if (!isEqual(cache.current, object)) {
        cache.current = object;
    }
    return cache.current;
}