import {ConfigProviderContext, ConfigProviderContextInterface, useConfigProvider} from "./ConfigProviderContext";
import * as React from "react";
import {useAutoDetectAppearance} from "../../hooks/useAutoDetectAppearance";
import {useObjectMemo} from "../../hooks/useObjectMemo";
import {TokensClassProvider} from "../TokenClassProvider/TokenClassProvider";
import {excludeKeysWithUndefined} from "../../utils/utils";

export interface ConfigProviderProps extends Partial<ConfigProviderContextInterface> {
    children: React.ReactNode
}

export const ConfigProvider = (propsRaw: ConfigProviderProps) => {

    const props = excludeKeysWithUndefined(propsRaw);
    const parentConfig = useConfigProvider();


    const {
        appearance: appearanceProp,
        children,
        tokensClassNames,
        platform,
        locale
    } =  {
        ...parentConfig,
        ...props,
    };

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