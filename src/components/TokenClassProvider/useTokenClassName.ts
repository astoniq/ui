import {TokensClassNames, TokensClassNamesByAppearances, TokensClassNamesByPlatforms} from "./types";
import {platform, Platform, PlatformType} from "../../utils/platform";
import {AppearanceType, DEFAULT_APPEARANCE} from "../../utils/appearance";
import * as React from "react";
import {ConfigProviderContext} from "../ConfigProvider/ConfigProviderContext";
import {DEFAULT_TOKENS_CLASS_NAMES} from "./constants";


const isTokensClassNamesForPlatforms = (
    tokensClassNames: TokensClassNames
): tokensClassNames is TokensClassNamesByPlatforms =>
    Platform.ANDROID in tokensClassNames
    || Platform.IOS in tokensClassNames
    || Platform.WEB in tokensClassNames;

const getTokenClassNameByAppearance = (appearance: AppearanceType,
                                      tokensClassNames?: TokensClassNamesByAppearances) =>
    (tokensClassNames ? tokensClassNames[appearance] : undefined);

const getAppearanceTokenClassNameByPlatform = (platform: PlatformType,
                                               tokensClassNames?: TokensClassNamesByPlatforms) =>
    (tokensClassNames ? tokensClassNames[platform]: undefined)

export const useTokensClassName = () => {
    const {
        platform,
        appearance = DEFAULT_APPEARANCE,
        tokensClassNames
    } = React.useContext(ConfigProviderContext)

    const appearanceSchemeClassName = isTokensClassNamesForPlatforms(tokensClassNames)
    ? getAppearanceTokenClassNameByPlatform(platform, tokensClassNames) : tokensClassNames;

    const tokenClassName = getTokenClassNameByAppearance(appearance, appearanceSchemeClassName);

    return tokenClassName ? tokenClassName : DEFAULT_TOKENS_CLASS_NAMES[platform][appearance];
}