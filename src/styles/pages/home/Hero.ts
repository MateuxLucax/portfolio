import styled, { keyframes } from 'styled-components';
import colors from '../../theme/colors';
import theme from '../../theme/theme';

export const SvgContainers = styled.div`
  margin-top: auto;
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
  animation: ${rocketAnimation} infinite 2s ease-in-out alternate;
`

export const Plume = styled.svg`
  animation: ${plumeAnimation} infinite .5s ease-in alternate;
`

export const Hero = styled.section`
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  color: ${colors.white};

  h1 {
    margin-top: ${theme.space.xxl};
    margin-bottom: ${theme.space.xl};
    font-size: ${theme.fontSizes.large};
    padding: 0 ${theme.space.lg};
    
    span {
      font-weight: 600;
      font-size: ${theme.fontSizes.extraLarge};
    }
  }

  h2 {
    padding: 0 ${theme.space.lg};
    font-size: ${theme.fontSizes.large};
  }

  background: radial-gradient(110% 45% at 100% 100%, #FF7E5F 0%, rgba(255, 126, 95, 0) 100%), radial-gradient(65% 60% at 0% 30%, #A03189 0%, rgba(160, 49, 137, 0) 100%), radial-gradient(335% 100% at 100% 0%, #3C308C 0%, rgba(60, 48, 140, 0.75) 100%);
  backdrop-filter: blur(10px);
`
