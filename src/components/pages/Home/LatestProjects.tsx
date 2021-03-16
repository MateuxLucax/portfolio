import { LatestProjectsSection } from "@/styles/pages/home/LatestProjects";
import Link from 'next/link';
import Image from 'next/image';
import { Subtitle } from "@/styles/Typography";
import { PrimaryButton } from "@/styles/Buttons";
import { ContentList } from "@/styles/pages/home/Home";
import HomeListItem from "@/models/HomeListItem";

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
                width={343}
                height={193}
                layout="responsive"
              />
              <h3>{project.title}</h3>
              <h5>{project.buttonText}</h5>
            </a>
          </Link>
        )}
      </ContentList>
      <PrimaryButton>{buttonText}</PrimaryButton>
    </LatestProjectsSection>
  )
}