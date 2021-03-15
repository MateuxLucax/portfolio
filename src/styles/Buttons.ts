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
  transition: opacity 250ms ease-in-out;
  box-shadow: ${boxShadow.primary};

  :hover {
    opacity: 0.9;
  }

  :focus, :active {
    opacity: 0.8;
  }
`