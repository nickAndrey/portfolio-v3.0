import type { Meta, StoryObj } from '@storybook/react';
import LinkItem from './LinkItem';

const meta = {
  component: LinkItem,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof LinkItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://www.google.com',
    text: 'Google',
  },
};
