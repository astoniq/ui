import * as React from 'react';
import { useGlobals } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { PARAM_KEY } from './constants';

export const AppearanceSwitch = () => {
    const [globals, updateGlobals] = useGlobals();
    const isDarkTheme = globals[PARAM_KEY] === 'dark';

    const toggleTheme = React.useCallback(() => {
        updateGlobals({ [PARAM_KEY]: isDarkTheme ? 'light' : 'dark' });
    }, [isDarkTheme, updateGlobals]);

    const title = isDarkTheme ? 'Turn the light theme' : 'Turn the dark theme';

    return (
        <IconButton placeholder={'asd'} active key="theme" onClick={toggleTheme} title={title}>
            {globals[PARAM_KEY]}
        </IconButton>
    );
};