import { RocketContainer, Hero, Rocket, Plume, FirstPlume, SecondPlume, ThirdPlume } from "@/styles/pages/home/Hero";
import { Link } from 'react-scroll';

interface HomeHeroProps {
  titlePrefix: string;
  subtitle: string;
}

export default function HomeHero({ titlePrefix, subtitle }: HomeHeroProps) {
  return (
    <Hero>
      <h2>{titlePrefix}</h2>
      <h1>Mateux Lucax</h1>
      <h2>{subtitle}</h2>
      <RocketContainer>
        <Link
          to="latest-projects"
          spy={true}
          smooth={true}
          duration={300}
        >
          <Rocket>
            <svg width="90" height="119" fill="none">
              <path d="M0 118.86L45 0l45 118.86-45-48.286L0 118.86z" fill="#F9F9F9" />
              <path d="M0 118.86l45-48.286 45 48.286-45-29.717L0 118.86z" fill="#DDD" />
            </svg>
            <Plume width="31" height="34" fill="none">
              <path d="M0 8.002L15.001.572l15.002 7.43L15 34 0 8.002z" fill="url(#hero-rocket-fire)" />
              <defs>
                <linearGradient id="hero-rocket-fire" x1="14.999" y1=".577" x2="15" y2="34.003" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFA200" />
                  <stop offset="1" stopColor="#FC6" />
                  <stop offset="1" stopColor="#FC6" />
                </linearGradient>
              </defs>
            </Plume>
          </Rocket>
        </Link>
        <ThirdPlume />
        <SecondPlume />
        <FirstPlume />
      </RocketContainer>
    </Hero>
  )
}