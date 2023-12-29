import {BrowserInfo, computeBrowserInfo} from "./browser";

export const Platform = {
    ANDROID: 'android',
    IOS: 'ios',
    WEB: 'web'
}

export type PlatformType = 'android' | 'ios' | 'web';

export function platform(browserInfo?: BrowserInfo): PlatformType {
    if (!browserInfo) {
        browserInfo = computeBrowserInfo();
    }
    return browserInfo.system === 'ios' ? 'ios' : 'android';
}

