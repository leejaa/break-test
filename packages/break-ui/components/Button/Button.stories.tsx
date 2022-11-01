import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextButton from './TextButton';

export default {
  title: 'Button',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

export const ButtonWithText: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args}>Text Button</TextButton>
);
