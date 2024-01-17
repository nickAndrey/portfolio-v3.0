import type { Meta, StoryObj } from '@storybook/react';
import Overlay from './Overlay';

const meta = {
  component: Overlay,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    overlayText: {
      title: 'Title',
      projectType: 'Project Type',
    },
    children: (
      <div
        style={{
          width: '600px',
          height: '600px',
          backgroundColor: 'lightgray',
        }}
      />
    ),
  },
};
