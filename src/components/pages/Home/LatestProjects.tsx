import Link from 'next/link';
import Image from 'next/image';
import { Subtitle } from "@/styles/Typography";
import { PrimaryButton } from "@/styles/Buttons";
import { ContentList } from "@/styles/pages/home/Home";
import HomeListItem from "@/models/HomeListItem";
import { LatestProjectsSection, RocketsContainer, FirstPlume, SecondPlume, ThirdPlume } from "@/styles/pages/home/LatestProjects";

interface HomeLatestProjectsProps {
  title: string;
  buttonText: string;
  projects: HomeListItem[];
}

export default function HomeLatestProjects({ title, buttonText, projects }: HomeLatestProjectsProps) {

  return (
    <LatestProjectsSection id="latest-projects">
      <Subtitle>{title}</Subtitle>
      <ContentList>
        {projects.map(project =>
          <Link
            href={`/projects/${project.destination}`}
            key={project.key}
          >
            <a>
              <Image
                src={`/assets/images/projects/${project.image}`}
                alt={project.title}
                width={340}
                height={190}
                layout="responsive"
              />
              <h3>{project.title}</h3>
              <h5>{project.buttonText}</h5>
            </a>
          </Link>
        )}
      </ContentList>
      <PrimaryButton>{buttonText}</PrimaryButton>
      <RocketsContainer>
        <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 42.2614L16 0L32 42.2614L16 25.093L0 42.2614Z" fill="#3C308C" />
          <path d="M0 42.2614L16 25.093L32 42.2614L16 31.6954L0 42.2614Z" fill="#241874" />
          <path d="M10.6667 36.9784L16.0005 34.3369L21.3343 36.9784L16.0005 46.2223L10.6667 36.9784Z" fill="url(#paint0_linear)" />
          <defs>
            <linearGradient id="paint0_linear" x1="15.9996" y1="34.3386" x2="16" y2="46.2235" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFA200" />
              <stop offset="1" stopColor="#FFCC66" />
            </linearGradient>
          </defs>
        </svg>

        <ThirdPlume />
        <SecondPlume />
        <FirstPlume />
      </RocketsContainer>
    </LatestProjectsSection>
  )
}