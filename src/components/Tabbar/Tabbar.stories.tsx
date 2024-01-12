import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {CanvasFullLayout} from "../../storybook/constants";
import {Tabbar, TabbarProps} from "./Tabbar";
import {TabbarItem} from "../TabbarItem/TabbarItem";

const story: Meta<TabbarProps> = {
    title: 'Layout/Tabbar',
    component: Tabbar,
    parameters: { ...CanvasFullLayout },
};

export default story;

type Story = StoryObj<TabbarProps>;

export const Playground: Story = {
    render: function Render(args) {
        const [activeStory, setActiveStory] = React.useState<string>('profile');
        const onStoryChange = (e: React.MouseEvent<HTMLElement>) =>
            setActiveStory(e.currentTarget.dataset.story!);

        return (
            <Tabbar {...args}>
                <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'feed'}
                    data-story="feed"
                    text="Новости"
                >
1
                </TabbarItem>
                <TabbarItem
                    onClick={onStoryChange}
                    selected={activeStory === 'services'}
                    data-story="services"
                    text="Сервисы"
                >
                    2
                </TabbarItem>
            </Tabbar>
        );
    },
};