import Navbar from '@/components/navbar/Navbar';
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
    </>
  );
}
