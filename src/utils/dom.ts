import {canUseDOM} from "../common/dom";
import * as React from "react";

export interface DomContextInterface {
    window?: Window;
    document?: Document;
}

export type DomProps = DomContextInterface;

export const getDom = () => ({
    window: canUseDOM ? window: undefined,
    document: canUseDOM? document: undefined
})

export const DomContext  = React.createContext<DomContextInterface>(getDom());

export const useDom = () => {
    return React.useContext(DomContext)
}