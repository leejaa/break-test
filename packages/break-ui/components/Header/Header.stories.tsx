import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';
import SearchHeader from './SearchHeader';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderWithIconButtons: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
);

export const HeaderWithSearchInput: ComponentStory<typeof SearchHeader> = (
  args,
) => <SearchHeader {...args} />;
