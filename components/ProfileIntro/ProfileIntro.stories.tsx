import type { Meta, StoryObj } from '@storybook/react';
import ProfileIntro from './ProfileIntro';

const meta = {
  title: 'ProfileIntro',
  component: ProfileIntro,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props
  },
};
