import styled from 'styled-components';
import colors from '@/styles/theme/colors';
import theme from '@/styles/theme/theme';

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: ${theme.fontSizes.large};
  color: ${props => props.color || colors.primary};
`