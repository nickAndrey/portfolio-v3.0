import Container from '@/components/Container/Container';
import ProfileIntro from '@/components/ProfileIntro/ProfileIntro';

const getPageData = () => {
  return {
    intro: {
      title: "Hello, I'm Andrew",
      subTitle: `I'm front-end developer based in Vancouver BC Canada.`,
      currentCompany: {
        name: 'Wave business intelligence Inc.',
        url: 'https://www.wavebi.com/',
      },
    },
  };
};

export default function Home() {
  const { intro } = getPageData();

  return (
    <Container>
      <ProfileIntro {...intro} />
    </Container>
  );
}
