import * as React from 'react';
import { Decorator } from '@storybook/react';
import {ConfigProvider} from "../components/ConfigProvider/ConfigProvider";
import {AdaptivityProvider} from "../components/AdaptivityProvider/AdaptivityProvider";


export const withVKUIWrapper: Decorator = (Component, context) => {
    const { platform, appearance, hasPointer = false } = context.globals;

    return (
        <ConfigProvider
            platform={platform}
            appearance={appearance}
        >
            <AdaptivityProvider hasPointer={hasPointer}>
                <Component />
            </AdaptivityProvider>
        </ConfigProvider>
    );
};