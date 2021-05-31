import colors from '@/styles/theme/colors';
import theme from '@/styles/theme/theme';
import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
  text-align: center;
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
  background: ${colors.black};
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
  background: rgba(18, 29, 91, 0.5);;
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
  background: rgba(101, 113, 181, 0.5);
  backdrop-filter: blur(1rem);
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
`
