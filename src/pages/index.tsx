import Navbar from '@/components/navbar/Navbar';
import AboutMe from '@/components/pages/Home/AboutMe';
import HomeHero from '@/components/pages/Home/Hero';
import HomeLatestProjects from '@/components/pages/Home/LatestProjects';
import SEO from '@/components/SEO';
import HomeListItem from '@/models/HomeListItem';

const projects: HomeListItem[] = [
  {
    key: 1,
    buttonText: 'Case Study →',
    destination: 'mrt-producoes',
    image: 'mrt-producoes.png',
    title: 'MRT Produções',
  },
  {
    key: 2,
    buttonText: 'Case Study →',
    destination: 'lixeira-inteligente',
    image: 'lixeira-inteligente.png',
    title: 'Lixeira Inteligente',
  },
  {
    key: 3,
    buttonText: 'Case Study →',
    destination: 'almocai',
    image: 'almocai.png',
    title: 'Almoçaí',
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="MateuxLucax | Portfolio"
        description="This is my personal portfolio. Here I share all my projects and blog posts sometimes, cuz teaching is always the best way to learn."
        shouldExcludeTitleSuffix
      />
      <HomeHero
        titlePrefix="Hi I'm"
        subtitle="My passion is to create astonishing experiences."
      />
      <HomeLatestProjects
        title="Latest Projects"
        buttonText="See more projects →"
        projects={projects}
      />

      <Navbar
        items={[
          {
            destination: '/blog',
            image: 'blog.svg',
            title: 'Blog',
          },
          {
            destination: '/projects',
            image: 'projects.svg',
            title: 'Projects',
          },
          {
            destination: '#contact',
            image: 'contact.svg',
            title: 'Contact',
          },
          {
            destination: '/',
            image: 'home.svg',
            title: 'Home',
            isActive: true,
          },
        ]}
      />

      <AboutMe
        title="About me"
        text="I’m <strong>Mateus Lucas</strong>, an 19 years old Brazilian <strong>front-end developer</strong>, but I also enjoy some back-end code lol. <br/><br/> My passion is to <strong>solve problems</strong> and create awesome experiences. <strong>Imagining</strong> all the  <strong>aspects</strong> and <strong>interactions</strong> that a <strong>user</strong> might have. <br/><br/> On my free time, I enjoy futzing around some code, read articles about <strong>rockets and space</strong>, play some Kerbal Space Program or design something."
        image="me.png"
        socialMedia="You can also follow my work on:"
      />
    </>
  );
}
