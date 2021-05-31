import { scrollToElement } from '@/lib/Utils';
import HomeListItem from '@/models/HomeListItem';
import { PrimaryButton, primaryTheme } from '@/styles/Buttons';
import { ContentList } from '@/styles/pages/home/Home';
import {
  Container,
  FirstPlume,
  RocketsContainer,
  SecondPlume,
  ThirdPlume,
} from '@/styles/pages/home/LatestBlogPosts';
import { Subtitle } from '@/styles/Typography';
import Image from 'next/image';
import Link from 'next/link';

interface LatestBlogPostsProps {
  title: string;
  buttonText: string;
  projects: HomeListItem[];
}

export default function LatestBlogPosts({
  title,
  buttonText,
  projects,
}: LatestBlogPostsProps) {
  return (
    <Container id="latest-blog-posts">
      <Subtitle>{title}</Subtitle>

      <ContentList>
        {projects.map(project => (
          <li key={project.key}>
            <Link href={`/blog/posts/${project.destination}`}>
              <a>
                <Image
                  src={`/assets/images/latestBlogPosts/${project.image}`}
                  alt={project.title}
                  width={340}
                  height={190}
                  layout="responsive"
                />
                <h3>{project.title}</h3>
                <h4>{project.buttonText}</h4>
              </a>
            </Link>
          </li>
        ))}
      </ContentList>
      <Link href="blog/">
        <PrimaryButton theme={primaryTheme}>{buttonText}</PrimaryButton>
      </Link>
      <RocketsContainer
        onClick={() => scrollToElement(document.querySelector('#about-me'))}
      >
        <svg width="32" height="34" fill="none">
          <path fill="#FC6" d="M0 0h32v20H0z" />
          <path d="M16 10.667L0 0h32L16 10.667z" fill="#DEAB45" />
          <path
            d="M11 24.889L16 22l5 2.889L16 34l-5-9.111z"
            fill="url(#plume)"
          />
          <defs>
            <linearGradient
              id="plume"
              x1="15.999"
              y1="22.002"
              x2="16"
              y2="34.001"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFA200" />
              <stop offset="1" stopColor="#FC6" />
              <stop offset="1" stopColor="#FC6" />
            </linearGradient>
          </defs>
        </svg>

        <ThirdPlume />
        <SecondPlume />
        <FirstPlume />
      </RocketsContainer>
    </Container>
  );
}
