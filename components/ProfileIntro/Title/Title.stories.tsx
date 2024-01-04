import type { Meta, StoryObj } from '@storybook/react';
import Title from './Title';

const meta = {
  title: 'Title',
  component: Title,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Title',
  },
};
