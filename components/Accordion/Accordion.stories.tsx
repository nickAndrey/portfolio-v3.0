import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta = {
  title: 'Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Accordion',
    children: 'Accordion content',
    open: false,
  },
};
