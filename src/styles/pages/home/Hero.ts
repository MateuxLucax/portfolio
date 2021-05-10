import styled, { keyframes } from 'styled-components';
import colors from '@/styles/theme/colors';
import theme from '@/styles/theme/theme';

export const RocketContainer = styled.div`
  z-index: 1;
  margin-top: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const plumeAnimation = keyframes`
  from {
    transform: translateY(-1.5rem);
  }
  to {
    transform: translateY(-1.25rem);
  }
`

const rocketAnimation = keyframes`
  from {
    transform: translateY(0rem);
  }
  to {
    transform: translateY(-2rem);
  }
`

export const Rocket = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
  cursor: pointer;
  padding-bottom: 10rem;
  animation: ${rocketAnimation} infinite 1.5s ease-in-out alternate;
`

export const Plume = styled.svg`
  animation: ${plumeAnimation} infinite .5s ease-in alternate;
`

export const HeroAnimation = keyframes`
  0% {
    background-position: left top;
  }
  25% {
    background-position: right top;
  }
  50% {
    background-position: right bottom;
  }
  75% {
    background-position: left bottom;
  }
  100% {
    background-position: left top;
  }
`

export const Hero = styled.section`
  /* height: 100vh; */
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  color: ${colors.white};

  h1 {
    padding: 0 ${theme.space.lg};
    margin-bottom: ${theme.space.xl};
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: ${theme.fontSizes.extraLarge};
    line-height: 1.75;
    
    span {
      font-weight: normal;
    }
  }

  h2 {
    :nth-child(1) {
      margin-top: ${theme.space.xl}; 
    }

    padding: 0 ${theme.space.lg};
    font-size: ${theme.fontSizes.large};
    max-width: 26rem;
  }

  background: radial-gradient(110% 45% at 100% 100%, #FF7E5F 0%, rgba(255, 126, 95, 0) 100%), 
              radial-gradient(65% 60% at 0% 30%, #A03189 0%, rgba(160, 49, 137, 0) 100%), 
              radial-gradient(335% 100% at 100% 0%, #3C308C 0%, rgba(60, 48, 140, 0.75) 100%);
	background-size: 200% 200%;
  animation: ${HeroAnimation} infinite 30s ease-in-out alternate;
  clip-path: polygon(100% 0, 100% 100%, 50% 95%, 0 100%, 0 0);
  backdrop-filter: blur(10px);
`

export const FirstPlume = styled.div`
  z-index: 1000;
  bottom: 0;
  height: 6rem;
  position: absolute;
  background: rgba(229, 229, 229, 0.5);
  backdrop-filter: blur(1rem);
  width: 90%;
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
`

export const SecondPlume = styled.div`
  z-index: 100;
  bottom: 0;
  height: 8rem;
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
  height: 10rem;
  width: 25%;
  background: rgba(191, 191, 191, 0.5);
  backdrop-filter: blur(1rem);
  clip-path: polygon(50% 0, 0 100%, 100% 100%); 
`