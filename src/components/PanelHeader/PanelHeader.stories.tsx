import {CanvasFullLayout} from "../../storybook/constants";
import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {PanelHeader, PanelHeaderProps} from "./PanelHeader";

const story: Meta<PanelHeaderProps> = {
    title: 'Layout/PanelHeader',
    component: PanelHeader,
    parameters: { ...CanvasFullLayout },
};

export default story;

type Story = StoryObj<PanelHeaderProps>;

export const SimplePanelHeader: Story = {
    render: () => (
        <PanelHeader>
            Стартовый экран
        </PanelHeader>
    ),
};