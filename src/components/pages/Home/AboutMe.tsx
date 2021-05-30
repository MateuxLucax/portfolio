import {
  Container,
  SocialMedia,
  SocialMediaTags,
  Summary,
  SummaryText,
} from '@/styles/pages/home/AboutMe';
import Parser from 'html-react-parser';
import { Subtitle } from '@/styles/Typography';
import React from 'react';
import colors from '@/styles/theme/colors';
import Image from 'next/image';
import Link from 'next/link';

interface AboutMeProps {
  title: string;
  text: string;
  image: string;
  socialMedia: string;
}

export default function AboutMe(props: AboutMeProps) {
  return (
    <Container>
      <Subtitle color={colors.white}>{props.title}</Subtitle>
      <Summary>
        <SummaryText>{Parser(props.text)}</SummaryText>
        <Image
          src={`/assets/images/aboutMe/${props.image}`}
          alt={props.title}
          width={150}
          height={220}
          layout="fixed"
        />
      </Summary>
      <SocialMedia>
        <h6>{props.socialMedia}</h6>
        <SocialMediaTags>
          <li>
            <Link href="https://www.linkedin.com/in/mateusbrandt/">
              <svg width="48" height="48" fill="none">
                <path
                  d="M44.142 0H3.858A3.859 3.859 0 000 3.858v40.284A3.859 3.859 0 003.858 48h40.284A3.859 3.859 0 0048 44.142V3.858A3.859 3.859 0 0044.142 0zm0 44.16c-26.868-.006-40.302-.012-40.302-.018.006-26.868.012-40.302.018-40.302 26.868.006 40.302.012 40.302.018-.006 26.868-.012 40.302-.018 40.302zM7.116 17.994h7.122v22.908H7.116V17.994zm3.564-3.132a4.132 4.132 0 003.814-5.708 4.128 4.128 0 00-7.942 1.58 4.12 4.12 0 004.128 4.128zm15.138 14.706c0-2.988.57-5.88 4.272-5.88 3.648 0 3.702 3.414 3.702 6.072v11.142h7.116V28.338c0-6.168-1.332-10.914-8.538-10.914-3.462 0-5.784 1.902-6.738 3.702h-.096v-3.132h-6.834v22.908h7.116V29.568z"
                  fill="#F9F9F9"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://dribbble.com/mateuxlucax/">
              <svg width="48" height="48" fill="none">
                <path
                  d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm0 3.478c5.228 0 10 1.956 13.625 5.174-2.663 3.512-6.708 5.851-10.762 7.434-2.294-4.18-4.866-8.2-7.698-12.036A20.548 20.548 0 0124 3.478zm-8.731 1.944c2.676 4.003 5.268 7.714 7.635 11.916C16.916 18.889 10.15 19.82 3.9 19.836 5.216 13.442 9.51 8.132 15.269 5.422zM39.9 11.026a20.44 20.44 0 014.621 12.838c-4.747-.936-9.468-1.18-14.275-.696-.54-1.347-1.195-2.628-1.823-4.008 4.144-1.671 8.574-4.53 11.477-8.134zm-15.33 9.487c.514 1.092 1.109 2.251 1.668 3.435-6.684 2.948-13.794 6.886-17.484 13.79a20.452 20.452 0 01-5.268-14.34c7.158-.033 14.184-.928 21.084-2.885zm10.846 5.595c2.986.001 5.96.384 8.85 1.14a20.52 20.52 0 01-8.817 13.785c-1.101-5.01-2.151-9.804-4.008-14.638a27.573 27.573 0 013.975-.287zm-7.771 1.224c1.89 4.888 3.375 10.3 4.371 15.567a20.454 20.454 0 01-8.016 1.625 20.433 20.433 0 01-12.594-4.32c3.717-6.03 9.474-10.593 16.239-12.872z"
                  fill="#F9F9F9"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="http://github.com/mateuxlucax/">
              <svg width="48" height="48" fill="none">
                <path
                  d="M34.246 48a2.406 2.406 0 01-2.405-2.402v-6.245a5.16 5.16 0 00-1.299-3.988 2.4 2.4 0 011.467-4.011c5.867-.697 11.278-2.57 11.278-12.731a9.602 9.602 0 00-1.611-5.333 6.6 6.6 0 01-.986-4.948 8.904 8.904 0 000-3.387 18.402 18.402 0 00-5.026 2.618 2.406 2.406 0 01-2.02.36 24.431 24.431 0 00-13.273 0 2.407 2.407 0 01-2.02-.36 17.801 17.801 0 00-5.073-2.618 8.445 8.445 0 000 3.387 6.816 6.816 0 01-1.035 4.996 9.77 9.77 0 00-1.61 5.357c0 9.344 4.52 11.842 11.301 12.707a2.406 2.406 0 011.972 1.585 2.4 2.4 0 01-.505 2.402 4.948 4.948 0 00-1.323 3.747v6.462A2.4 2.4 0 0119.674 48a2.406 2.406 0 01-2.405-2.402v-1.37a14.442 14.442 0 01-12.672-5.02 9.38 9.38 0 00-2.79-2.113 2.41 2.41 0 01-1.73-2.93 2.405 2.405 0 011.994-1.783c.314-.044.633-.026.939.053A11.856 11.856 0 017.819 35.7c2.405 2.402 4.81 4.516 9.378 3.652a9.335 9.335 0 01.553-3.796c-4.953-1.249-12.023-4.804-12.023-16.814a14.401 14.401 0 012.405-7.999 2.04 2.04 0 00.312-1.49c-.486-2.592-.21-5.27.794-7.71a2.402 2.402 0 011.515-1.37c.817-.24 3.75-.72 9.305 2.883a29.27 29.27 0 0113.683 0C39.295-.546 42.229-.089 43.022.175a2.405 2.405 0 011.515 1.37 13.702 13.702 0 01.794 7.734 1.798 1.798 0 00.264 1.369A14.402 14.402 0 0148 18.67c0 12.178-7.022 15.71-12.023 16.814.44 1.29.62 2.653.529 4.012v6.1A2.4 2.4 0 0134.246 48z"
                  fill="#F9F9F9"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://codepen.io/mateuxlucax/">
              <svg width="48" height="48" fill="none">
                <path
                  d="M47.964 16.407l-.018-.09c-.012-.06-.018-.114-.036-.174-.012-.036-.024-.066-.03-.102-.018-.048-.03-.102-.054-.15-.012-.036-.03-.066-.048-.102l-.072-.138c-.018-.03-.036-.066-.06-.096-.048-.072-.102-.144-.156-.216a1.745 1.745 0 00-.102-.114c-.024-.03-.054-.054-.084-.079-.036-.036-.078-.066-.114-.096a1.353 1.353 0 00-.096-.072c-.011-.006-.023-.018-.035-.024L25.139.347a2.055 2.055 0 00-2.284 0L.924 14.967c-.012.005-.024.017-.036.023-.03.024-.06.048-.096.072-.042.03-.078.067-.114.097-.03.023-.054.053-.084.078-.036.036-.072.072-.102.114-.06.066-.108.138-.156.216-.018.03-.042.06-.06.096-.024.042-.048.09-.072.138-.018.03-.03.066-.048.102l-.054.15c-.012.036-.024.066-.03.102a8.528 8.528 0 00-.036.174l-.018.09c-.012.09-.018.18-.018.27v14.62c0 .09.006.18.018.27l.018.09.036.174c.012.037.018.067.03.102.018.055.036.103.054.15.012.037.03.067.048.103.024.048.042.09.072.138.018.03.036.066.06.096.03.042.054.084.09.126l.072.09a1.744 1.744 0 00.186.192c.036.036.078.066.114.096.03.024.06.048.096.072.012.006.024.018.036.024l21.925 14.62a2.052 2.052 0 002.29 0l21.926-14.62c.012-.006.023-.018.035-.024.03-.024.06-.048.096-.072.042-.03.078-.066.114-.096.03-.024.054-.054.084-.078a.922.922 0 00.102-.114l.072-.09.09-.126c.018-.03.042-.06.06-.096l.072-.138c.018-.03.03-.066.048-.102l.054-.15a.506.506 0 00.03-.103c.018-.054.024-.114.036-.174l.018-.09c.012-.09.018-.18.018-.27V16.677c-.018-.09-.024-.18-.036-.27zM26.057 5.912l16.156 10.771-7.215 4.828-8.935-5.98V5.912h-.006zm-4.126 0v9.619l-8.936 5.98-7.214-4.828 16.15-10.77zM4.126 20.538l5.157 3.452-5.157 3.453v-6.905zM21.93 42.062l-16.15-10.77 7.215-4.828 8.935 5.98v9.618zm2.063-13.196l-7.292-4.876 7.292-4.88 7.292 4.874-7.292 4.881zm2.063 13.196v-9.618l8.936-5.98 7.214 4.827-16.15 10.771zm17.805-14.625l-5.157-3.453 5.157-3.452v6.904z"
                  fill="#F9F9F9"
                />
              </svg>
            </Link>
          </li>
        </SocialMediaTags>
      </SocialMedia>
    </Container>
  );
}
