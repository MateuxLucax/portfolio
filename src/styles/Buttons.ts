import styled from 'styled-components';
import boxShadow from './theme/boxShadow';
import colors from './theme/colors';
import theme from './theme/theme';

export const Container = styled.section`
  display: flex;
  align-items: center;
`

export const PrimaryButton = styled.button`
  font-weight: bold;
  font-size: ${theme.fontSizes.normal};
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  padding: ${theme.space.sm} ${theme.space.xl};
  cursor: pointer;
  transition: all .25s ease-in-out;
  box-shadow:  ${props => props.theme.boxShadow};
  font-family: 'Fira Mono', monospace;

  :hover {
    box-shadow: ${boxShadow.primaryLight};
    opacity: 0.95;
  }

  :focus, :active {
    box-shadow: none;
    opacity: 0.85;
  }

  :disabled {
    opacity: 0.5;
    box-shadow: none;
  }
`;

export const primaryTheme = {
  backgroundColor: colors.primary,
  color: colors.white,
  boxShadow: boxShadow.primary,
};

export const whiteTheme = {
  backgroundColor: colors.white,
  color: colors.primary,
  boxShadow: 'none',
};
