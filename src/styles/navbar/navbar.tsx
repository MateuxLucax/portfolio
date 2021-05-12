import styled from 'styled-components';
import theme from '@/styles/theme/theme';
import colors from '@/styles/theme/colors';

export const Container = styled.nav`
  position: absolute;
  z-index: 100;
  bottom: 0;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(1rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.space.xl};

  li {
    text-transform: uppercase;
    color: ${colors.primaryDark};
    opacity: 0.75;
    font-weight: bold;
    font-size: 1.2rem;

    .active {
      opacity: 1;
    }
  } 
`