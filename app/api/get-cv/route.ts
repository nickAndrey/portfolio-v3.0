import request, { gql } from 'graphql-request';

export async function GET() {
  const endpoint = process.env.CONTENT_API as string;

  const query = gql`
    {
      profiles {
        cv {
          url
        }
      }
    }
  `;

  const { profiles }: { profiles: [{ cv: { url: string } }] } = await request(endpoint, query);

  return new Response(JSON.stringify(profiles[0].cv.url));
}
