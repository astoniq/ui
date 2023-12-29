import * as React from "react";
import {canUseDOM} from "../common/dom";

export const useIsomorphicLayoutEffect = canUseDOM ? React.useLayoutEffect : React.useEffect;