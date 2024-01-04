import type { Meta, StoryObj } from '@storybook/react';
import Works from './Works';

const meta = {
  title: 'Works',
  component: Works,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '100%', backgroundColor: 'var(--primary-color)' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Works>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props
  },
};
