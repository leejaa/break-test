import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderWithIconButtons: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);
