import Container from '@/components/Container/Container';
import ProfileIntro from '@/components/ProfileIntro/ProfileIntro';
import Intro from '@/types/intro';
import Project from '@/types/project';
import request, { gql } from 'graphql-request';

const endpoint = process.env.CONTENT_API as string;
const introId = process.env.INTRO_ID as string;

const projectsQuery = gql`
  {
    projects {
      id
      title
      description
      projectType
      images {
        url
        id
      }
      position
      startDate
      endDate
    }
  }
`;

const introQuery = gql`
  {
    intro(where: { id: "${introId}" }) {
      currentCompany
      supTitle
      title
    }
  }
`;

export default async function Home() {
  const { projects }: { projects: Project[] } = await request(endpoint, projectsQuery);
  const { intro }: { intro: Intro } = await request(endpoint, introQuery);

  return (
    <Container>
      <ProfileIntro intro={intro} />
    </Container>
  );
}
