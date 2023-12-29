import {ConfigProviderContext, ConfigProviderContextInterface} from "./ConfigProviderContext";
import * as React from "react";
import {useAutoDetectAppearance} from "../../hooks/useAutoDetectAppearance";
import {useObjectMemo} from "../../hooks/useObjectMemo";
import {TokensClassProvider} from "../TokenClassProvider/TokenClassProvider";

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
    children: React.ReactNode
}

export const ConfigProvider = (props: ConfigProviderProps) => {

    const {
        appearance: appearanceProp,
        children,
        tokensClassNames,
        platform,
        locale
    } = props

    const appearance = useAutoDetectAppearance(appearanceProp);

    const configContext = useObjectMemo({
        appearance,
        tokensClassNames,
        platform,
        locale
    })

    return (
        <ConfigProviderContext.Provider value={configContext}>
            <TokensClassProvider>{children}</TokensClassProvider>
        </ConfigProviderContext.Provider>
    )
}