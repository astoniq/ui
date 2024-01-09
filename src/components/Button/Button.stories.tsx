import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import {CanvasFullLayout} from "../../storybook/constants";

type StoryButtonProps = ButtonProps & { addBefore: boolean; addAfter: boolean };

const story: Meta<StoryButtonProps> = {
    title: 'Blocks/Button',
    component: Button,
    parameters: CanvasFullLayout,
    argTypes: {
        before: { control: false },
        after: { control: false },
        addBefore: {
            control: { type: 'boolean' },
        },
        addAfter: {
            control: { type: 'boolean' },
        },
    },
};

export default story;

type Story = StoryObj<Omit<StoryButtonProps, 'before' | 'after'>>;

export const Playground: Story = {
    render: ({ addBefore, addAfter, ...args }) => {

        return <Button {...args} />;
    },
    args: {
        children: 'Button',
        size: 's',
    },
};