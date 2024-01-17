import type { Meta, StoryObj } from '@storybook/react';
import SupTitle from './SupTitle';

const meta = {
  component: SupTitle,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SupTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'SupTitle',
  },
};
