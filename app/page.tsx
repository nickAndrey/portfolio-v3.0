import HomePage from '@/components/Routes/HomePage/HomePage';
import Profile from '@/types/profile';
import Project from '@/types/project';
import { gql, request } from 'graphql-request';

const endpoint = process.env.CONTENT_API as string;

const getFeaturedProjects = async () => {
  const query = gql`
    {
      projects(orderBy: publishedAt_DESC, first: 4) {
        id
        title
        description
        projectType
        images {
          url
          id
        }
      }
    }
  `;

  const { projects }: { projects: Project[] } = await request(endpoint, query);
  return projects;
};

const getProfile = async () => {
  const query = gql`
    {
      profiles {
        id
        title
        summary
      }
    }
  `;

  const { profiles }: { profiles: Profile[] } = await request(endpoint, query);
  return profiles[0];
};

const projects = [
  {
    id: 'clp643hqg5sj70bu2z4hh7s7v',
    title: 'Dream Place',
    description: 'Application that help user to list, discover, and book accommodations around the world',
    projectType: 'Personal',
    images: [
      { url: 'https://media.graphassets.com/g9e7HfZxRm5kJtcyQbnw', id: 'clp65nmeq5r0s0bu4athdboqe' },
      { url: 'https://media.graphassets.com/dwy0djieSVy7stlP4FmT', id: 'clp65nmdp5tlu0bu27ulvjscj' },
      { url: 'https://media.graphassets.com/Tqz94vrvTimkY3Ix7N0g', id: 'clp65nmen5tly0bu2nh212yef' },
      { url: 'https://media.graphassets.com/tRXuBp5QTHOr9Ifio93C', id: 'clp65nmed5r0o0bu4y36prqzq' },
      { url: 'https://media.graphassets.com/nksdcYDcRwCmMO5qR0ZS', id: 'clp65nmdk5r0k0bu4mzfumhds' },
      { url: 'https://media.graphassets.com/iDDyerFS3W9J25o6xjr4', id: 'clp65nmer5tm20bu2bc993pbg' },
    ],
  },
  {
    id: 'clouxns3q94yf0btz6itza9p6',
    title: 'Inspic',
    description: 'Application that helps user creates stunning picture quotes.',
    projectType: 'Saas',
    images: [{ url: 'https://media.graphassets.com/HpoHQPhQPqrFRmUBRuyc', id: 'clouxnoeycdo90atyb6xe9cot' }],
  },
  {
    id: 'clouu5dgmccb00bsr5ziqaqnf',
    title: 'Fudo',
    description: 'Privileged Access Management (PAM) solutions.',
    projectType: 'security platform',
    images: [{ url: 'https://media.graphassets.com/i0pdTM9XSHmcpyYlZPpz', id: 'clouu52ne92450btz3pqhq44o' }],
  },
  {
    id: 'clouu1iv7147u0bssq02y384o',
    title: 'Railway Security Startup',
    description:
      'A startup with a mission to revolutionize railway safety by providing fast, easy, and cost-effective cybersecurity solutions.',
    projectType: 'security platform',
    images: [{ url: 'https://media.graphassets.com/hALuSNWJQGWpjktuWd6K', id: 'clouu1grccc8u0bsrznzyjmij' }],
  },
];

export default async function Home() {
  return <HomePage projects={projects as Project[]} />;
}
