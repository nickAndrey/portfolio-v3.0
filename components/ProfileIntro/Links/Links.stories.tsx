import type { Meta, StoryObj } from '@storybook/react';
import Links from './Links';

const meta = {
  title: 'Links',
  component: Links,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props
  },
};
