import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    children: 'Click me',
    variant: 'solid',
    size: 'md',
    colorSchema: 'primary'
  }
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'md',
    colorSchema: 'primary'
  }
};

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
    size: 'md',
    colorSchema: 'primary'
  }
};
