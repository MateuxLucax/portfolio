import Navbar from '@/components/navbar/Navbar';
import AboutMe from '@/components/pages/Home/AboutMe';
import Contact from '@/components/pages/Home/Contact';
import HomeHero from '@/components/pages/Home/Hero';
import LatestBlogPosts from '@/components/pages/Home/LatestBlogPosts';
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

const latestBlogPosts: HomeListItem[] = [
  {
    key: 1,
    buttonText: 'Read about →',
    destination: 'fetch-api-async-await',
    image: 'dog-1.png',
    title: 'Fetch API with Async/Await',
  },
  {
    key: 2,
    buttonText: 'Read about →',
    destination: 'pwa-basics',
    image: 'dog-2.png',
    title: 'PWA Basics',
  },
  {
    key: 3,
    buttonText: 'Read about →',
    destination: 'css-variables',
    image: 'dog-3.png',
    title: 'CSS Variables',
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

      <AboutMe
        title="About me"
        text="I’m <strong>Mateus Lucas</strong>, an 19 years old Brazilian <strong>front-end developer</strong>, but I also enjoy some back-end code lol. <br/><br/> My passion is to <strong>solve problems</strong> and create awesome experiences. <strong>Imagining</strong> all the  <strong>aspects</strong> and <strong>interactions</strong> that a <strong>user</strong> might have. <br/><br/> On my free time, I enjoy futzing around some code, read articles about <strong>rockets and space</strong>, play some Kerbal Space Program or design something."
        image="me.png"
        socialMedia="You can also follow my work on:"
      />

      <LatestBlogPosts
        title="Latest Blog Posts"
        buttonText="See more posts →"
        projects={latestBlogPosts}
      />

      <Contact
        title="Contact me"
        description="Don’t be shy. Drop me a line about anything you want. From business inquiries to just a casual conversation."
        emailLabel="E-mail"
        emailPlaceholder="me@mail.com"
        messageLabel="Message"
        messagePlaceholder="Hi, I’d like to talk about..."
        buttonText="Send message →"
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
