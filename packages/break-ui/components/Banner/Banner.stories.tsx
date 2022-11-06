import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Banner from './Banner';

export default {
  title: 'Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

export const Banner1: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
);
