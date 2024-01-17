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
      {
        id: 'cloum42fdc5qr0aty4l5se4o2',
        title: 'Workkit',
        description: 'Workkit is a new hiring platform that connects employers and applicants.',
        projectType: 'hiring platform',
        skills: ['Next.js', 'TypeScript', 'StyledComponents', 'NestJS', 'MongoDB'],
        images: [
          {
            id: 'cloum24i80z5q0bss1wkw7f0w',
            url: 'https://media.graphassets.com/MG95V6U3R4KPxMT8vIGa',
          },
        ],
        position: 'Front-end developer',
        startDate: '2020-06-01',
        endDate: '2020-10-01',
        summary: {
          text: 'Workkit is a new hiring platform that connects employers and applicants, tackling hiring inefficiencies by using AI to match workers and employers in real time. The Workkit signup process is straightforward for both applicants and employers, making it accessible not only for large enterprises but also small businesses. With platforms like Workkit, hiring managers can fill open positions in no time, ensuring that work never stops.\n\nIt is a two-sided marketplace that connects workers searching for jobs to businesses looking for workers.\n  \nResponsibilities:\n* Wrote functional code for the front-end part of the application, using Next.js, TypeScript and StyledComponents.\n* Developed back-end part of the application using NestJS, MongoDB,\n* Used Monday as a task management system.\n* Used Git flow approach on daily basis.\n\n\nKey Achievements:\n* Prepared MVP within deadlines.\n* Added a full process of authentication front-end and back-end for both worker and employee user dashboards using JWT, NextAuth and Passport.\n* Implemented a password-less one time login link for the worker user (a one time login link via SMS) * Implemented two completely different UI dashboards for worker and employee users.\n* Prepared DB structures for storing and efficiently using data from two different sources.\n* Implemented 2 different front-ends and provide full functionality of communication between them.',
        },
      },
      {
        id: 'clouu1iv7147u0bssq02y384o',
        title: 'Railway Security Startup',
        description:
          'A startup with a mission to revolutionize railway safety by providing fast, easy, and cost-effective cybersecurity solutions.',
        projectType: 'security platform',
        skills: ['React', 'StyledComponents', 'SCSS', 'TypeScript'],
        images: [
          {
            id: 'clouu1grccc8u0bsrznzyjmij',
            url: 'https://media.graphassets.com/hALuSNWJQGWpjktuWd6K',
          },
        ],
        position: 'Front-end developer',
        startDate: '2020-10-01',
        endDate: '2021-03-01',
        summary: {
          text: 'A startup with a mission to revolutionize railway safety by providing fast, easy, and cost-effective cybersecurity solutions for railway organizations to secure their infrastructure and vital assets.\n\nResponsibilities:\n* Wrote functional code for the front-end part of the application. \n⁠* Used Jira as a task management system.\n* Used Git flow approach on a daily basis.\n* Made sure everything was pixel-perfect like in the design.\n\n\nKey Achievements:\n* Modified the entire UI to match a new design language\n* Created and implemented a functionality to support switching between light and dark themes. * Updated each component on the project to fit the new themes.\n* Refactored existing components to be more generic, to be reused in various other use cases.',
        },
      },
    ],
  },
};
