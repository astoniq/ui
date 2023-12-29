import {PlatformType} from "../utils/platform";
import {useConfigProvider} from "../components/ConfigProvider/ConfigProviderContext";

export function usePlatform(): PlatformType {
    const {platform} = useConfigProvider();
    return platform;
}