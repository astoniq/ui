import * as React from "react";
import {AppearanceType} from "../../utils/appearance";
import {platform, PlatformType} from "../../utils/platform";
import {TokensClassNames} from "../TokenClassProvider/types";
import {DEFAULT_TOKENS_CLASS_NAMES} from "../TokenClassProvider/constants";

export interface ConfigProviderContextInterface {
    /**
     * Строка с языковой меткой BCP 47
     */
    locale: string;
    /**
     * Тип цветовой схемы – `light` или `dark`
     */
    appearance: AppearanceType | undefined;

    /**
     * Платформа
     */
    platform: PlatformType;

    /**
     * CSS классы, определяющие набор токенов
     */
    tokensClassNames: TokensClassNames;
}

export const ConfigProviderContext = React.createContext<ConfigProviderContextInterface>({
    locale: 'ru',
    platform: platform(),
    appearance: undefined,
    tokensClassNames: DEFAULT_TOKENS_CLASS_NAMES
})

export const useConfigProvider = () => React.useContext(ConfigProviderContext);

