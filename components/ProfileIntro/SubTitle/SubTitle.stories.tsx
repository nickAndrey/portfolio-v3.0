import type { Meta, StoryObj } from '@storybook/react';
import SubTitle from './SubTitle';

const meta = {
  title: 'SubTitle',
  component: SubTitle,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SubTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'SubTitle',
  },
};
