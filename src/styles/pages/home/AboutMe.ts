import styled, { keyframes } from 'styled-components';
import colors from '@/styles/theme/colors';
import theme from '@/styles/theme/theme';

export const Container = styled.section`
  text-align: center;
  background: radial-gradient(65% 50% at -5% 100%, #B23485 0%, rgba(178, 52, 133, 0) 100%),
              radial-gradient(65% 50% at 100% 100%, #D34C4C 0%, rgba(211, 76, 76, 0) 100%),
              linear-gradient(180deg, #3C308C 0%, rgba(60, 48, 140, 0.75) 115%);
  backdrop-filter: blur(10px);
`

export const Summary = styled.section`
  padding: ${theme.space.xl} 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    flex: 1;
  }
`

export const SummaryText = styled.p`
  text-align: left;
  flex: 2;
  font-size: ${theme.fontSizes.normal};
  color: ${colors.white};
  line-height: 1.25;
  padding: 0 ${theme.space.lg};

  strong {
    font-weight: bold;
  }
`

export const SocialMedia = styled.section`
  padding: 0 ${theme.space.lg};

  h6 {
    font-size: ${theme.fontSizes.normal};
    font-weight: bold;
    text-align: left;
    color: ${colors.white};
    padding-bottom: ${theme.space.lg};
  }
`

export const SocialMediaTags = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${theme.space.xl};

  li {
    transition: all .3s ease;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`

const rocketAnimation = keyframes`
  from {
    transform: translateY(0rem);
  }
  to {
    transform: translateY(-1rem);
  }
`

export const RocketsContainer = styled.div`
  padding-top: ${theme.space.xl};
  z-index: 1;
  margin-top: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: ${theme.space.xl};

  svg {
    padding-bottom: ${theme.space.xxl};
    animation: ${rocketAnimation} infinite 1.5s ease-in-out alternate;
  }
`

export const FirstPlume = styled.div`
  z-index: 1000;
  bottom: 0;
  height: 3rem;
  position: absolute;
  background: ${colors.white};
  backdrop-filter: blur(1rem);
  width: 100%;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
  transform: translateY(.1rem);

`

export const SecondPlume = styled.div`
  z-index: 100;
  bottom: 0;
  height: 5rem;
  position: absolute;
  background: rgba(213, 213, 213, 0.5);
  backdrop-filter: blur(1rem);
  width: 70%;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
`

export const ThirdPlume = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  height: 7rem;
  width: 25%;
  background: rgba(191, 191, 191, 0.5);
  backdrop-filter: blur(1rem);
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
`
