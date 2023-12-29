import {Version} from "../types";
import {detectIOS} from "../common/ios";

export interface BrowserInfo {
    userAgent: string;
    system: 'ios' | '';
    systemVersion: Version | null;
}

const memoized: {[index: string]: BrowserInfo} = {};

export function computeBrowserInfo(userAgent = ''): BrowserInfo {
    if (memoized[userAgent]) {
        return memoized[userAgent]
    }

    const browserInfo: BrowserInfo = {
        userAgent,
        system: '',
        systemVersion: null
    }

    const {isIOS, iosMajor, iosMinor} = detectIOS(userAgent);

    if (isIOS) {
        browserInfo.system = 'ios';
        browserInfo.systemVersion = {
            major: iosMajor,
            minor: iosMinor
        }
    }

    memoized[userAgent] = browserInfo;

    return browserInfo;
}