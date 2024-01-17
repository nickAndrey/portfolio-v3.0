import type { Meta, StoryObj } from '@storybook/react';
import ImageGrid from './ImageGrid';

const meta = {
  component: ImageGrid,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ImageGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props
  },
};
