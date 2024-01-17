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
    projects: [
      {
        id: 'clou8xf25byq70bsrx4z30tbs',
        title: 'Mrkter',
        description:
          'Banking platform which provides the opportunity to open an international and domestic business accounts in minutes.',
        projectType: 'banking platform',
        skills: [
          'React.JS',
          'TypeScript',
          'StyledComponents',
          'NestJS',
          'PostgresSQL',
          'Docker',
          'Jira',
        ],
        images: [
          {
            id: 'clou8x1pnbx3z0atysiz0m2da',
            url: 'https://media.graphassets.com/ahc63TYJS9CSLhxaixV7',
          },
        ],
        position: 'Front-end developer',
        startDate: '2021-03-01',
        endDate: '2021-06-01',
        summary: {
          text: 'Banking platform which provides the opportunity to open an international and domestic business accounts in minutes and aggregate all your accounts to one dashboard\n\nResponsibilities:\n* Wrote functional code for the front-end part of the application, using React.JS, TypeScript and StyledComponents.\n* Developed the back-end part of the application using technologies such as: NestJS, PostgresSQL, Docker.\n* Provided technical documentation to help other developers quickly up and run the working environment.\n* Added unit and e2e tests using Jest.\n* Worked closely with a designer, project manager and other developers\n* Made code reviews for other developers to help complete tasks in more efficient ways by finding logical errors, suggesting better approaches and detecting possible vulnerabilities.\n* Used Monday as a task management system.\n* Used Git flow approach on a daily basis.\n\n\nKey Achievements:\n* Added a theme switching functionality which is now widely used throughout the application.\n* Added a routing system to switch between pages which is simple to use and extend\n* Added a map component which allows the user to add a new account just from the map in the region they want to.',
        },
      },
    ],
  },
};
