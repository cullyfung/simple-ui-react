import { Meta, StoryObj } from '@storybook/react';
import { Text } from '.';

const meta: Meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: 'h1',
    children: 'Hello World'
  }
};
