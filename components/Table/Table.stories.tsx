import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';

const meta = {
  component: Table,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    projects: [
      {
        id: '1',
        title: 'Title',
        position: 'Position',
        startDate: 'Start Date',
        endDate: 'End Date',
        description: 'Description',
        projectType: 'Project Type',
        skills: ['Skill 1', 'Skill 2'],
        summary: {
          text: 'Summary Text',
        },
        images: [
          {
            id: '1',
            url: 'https://via.placeholder.com/400x200',
          },
        ],
      },
    ],
  },
};
