import styled from 'styled-components';
import theme from '@/styles/theme/theme';
import boxShadow from '@/styles/theme/boxShadow';
import colors from '@/styles/theme/colors';

export const Title = styled.h1`
  color: #8257e5;
`

export const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: ${theme.space.xl} 0;

  a {
    width: calc(100vw - 2.4rem);
    position: relative;
    
    :nth-child(even) {
      align-self: flex-end;   
    }

    :nth-child(odd) {
      align-self: flex-start;
    }

    :not(:last-child) {
      margin-bottom: ${theme.space.lg}
    }
    
    transition: all 250ms ease-in-out;
    box-shadow: ${boxShadow.medium};

    :hover {
      opacity: 0.9;
      box-shadow: ${boxShadow.small};
    }

    :focus, :active {
      opacity: 0.8;
      box-shadow: none;
    }
  }

  h3 {
    position: absolute;
    color: ${colors.white};
    background: rgba(60, 48, 140, 0.7);
    backdrop-filter: blur(10px);
    font-weight: 600;
    font-size: ${theme.fontSizes.small};
    padding: ${theme.space.sm} ${theme.space.md};
    top: ${theme.space.md};
    left: ${theme.space.md};
  }

  h5 {
    position: absolute;
    color: ${colors.primary};
    background: rgba(249, 249, 249, 0.7);
    backdrop-filter: blur(10px);
    font-weight: 600;
    font-size: ${theme.fontSizes.small};
    padding: ${theme.space.sm} ${theme.space.md};
    bottom: ${theme.space.md};
    right: ${theme.space.md};
    
    transition: all 250ms ease-in-out;
    box-shadow: ${boxShadow.medium};

    :hover {
      background: ${colors.white};
    }

  }
`