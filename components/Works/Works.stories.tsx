import type { Meta, StoryObj } from '@storybook/react';
import Works from './Works';

const meta = {
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
    works: [
      {
        company: 'Project A',
        description: 'Project A is a web development project.',
        position: 'Front-end developer',
        startDate: '2018-01-01',
        endDate: '2019-01-01',
        responsibilities: 'Developed user interface with React.js and managed state with Redux.',
        url: 'https://www.project-a.com/',
        image: {
          src: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Project A',
        },
      },
      {
        company: 'Project B',
        description: 'Project B is a mobile app development project.',
        position: 'Back-end developer',
        startDate: '2019-02-01',
        endDate: '2020-02-01',
        responsibilities: 'Developed user interface with React.js and managed state with Redux.',
        url: 'https://www.project-b.com/',
        image: {
          src: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Project B',
        },
      },
      {
        company: 'Project C',
        description: 'Project C is a data science project.',
        position: 'Data Scientist',
        startDate: '2020-03-01',
        endDate: '2021-03-01',
        responsibilities: 'Developed user interface with React.js and managed state with Redux.',
        url: 'https://www.project-c.com/',
        image: {
          src: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Project C',
        },
      },
      {
        company: 'Project D',
        description: 'Project D is a machine learning project.',
        position: 'Machine Learning Engineer',
        startDate: '2021-04-01',
        endDate: '2022-04-01',
        responsibilities: 'Developed user interface with React.js and managed state with Redux.',
        url: 'https://www.project-d.com/',
        image: {
          src: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Project D',
        },
      },
      {
        company: 'Project E',
        description: 'Project E is a cloud computing project.',
        position: 'Cloud Engineer',
        startDate: '2022-05-01',
        endDate: '2023-05-01',
        responsibilities: 'Developed user interface with React.js and managed state with Redux.',
        url: 'https://www.project-e.com/',
        image: {
          src: 'https://images.unsplash.com/photo-1682685797332-e678a04f8a64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Project E',
        },
      },
    ],
  },
};
