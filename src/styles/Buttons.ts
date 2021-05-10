import styled from 'styled-components';
import boxShadow from './theme/boxShadow';
import colors from './theme/colors';
import theme from './theme/theme';

export const PrimaryButton = styled.button`
  font-weight: bold;
  font-size: ${theme.fontSizes.normal};
  color: ${colors.white};
  background-color: ${colors.primary};
  padding: ${theme.space.sm} ${theme.space.xl};
  cursor: pointer;
  transition: all 250ms ease-in-out;
  box-shadow: ${boxShadow.primary};
  font-family: 'Fira Mono', monospace;

  :hover {
    box-shadow: ${boxShadow.primaryLight};
    opacity: 0.95;
  }

  :focus, :active {
    box-shadow: none;
    opacity: 0.85;
  }
`