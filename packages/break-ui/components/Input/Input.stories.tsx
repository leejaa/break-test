import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CustomInput from './CustomInput';

export default {
  title: 'Input',
  component: CustomInput,
} as ComponentMeta<typeof CustomInput>;

export const Default: ComponentStory<typeof CustomInput> = (args) => (
  <CustomInput placeholder="카드정보를 검색해보세요" {...args} />
);
