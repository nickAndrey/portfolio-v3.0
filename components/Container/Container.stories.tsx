import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta = {
  component: Container,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Container' },
  render: (args) => (
    <div
      style={{
        border: '1px dashed black',
        height: 100,
        width: 100,
      }}
    >
      <Container {...args} />
    </div>
  ),
};
