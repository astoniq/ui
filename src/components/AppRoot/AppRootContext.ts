import * as React from "react";

export interface AppRootContextInterface {
    keyboardInput: boolean;
}

export const AppRootContext = React.createContext<AppRootContextInterface>({
    keyboardInput: false
})