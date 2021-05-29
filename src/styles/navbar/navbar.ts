import styled from 'styled-components';
import theme from '@/styles/theme/theme';
import colors from '@/styles/theme/colors';

export const Container = styled.nav`
  position: fixed;
  z-index: 100;
  bottom: 0;
  width: 100%;
  width: 100vw;
  width: -webkit-fill-available;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(1rem);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${theme.space.md} ${theme.space.xl};

  li {
    text-transform: uppercase;
    color: ${colors.primaryDark};
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all .3s ease;

    span {
      font-size: 1.4rem;
      font-weight: bold;
    }

    img {
      margin-bottom: ${theme.space.sm};
    }

    :not(.active) {
      opacity: 0.5;
    }

    :focus, :active {
      transform: scale(0.95);
    }
  }
`
