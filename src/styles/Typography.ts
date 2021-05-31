import styled from 'styled-components';
import colors from '@/styles/theme/colors';
import theme from '@/styles/theme/theme';

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: ${theme.fontSizes.large};
  color: ${props => props.color  || colors.primary};
`

export const Paragraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: ${theme.fontSizes.normal};
  line-height: 1.25;
  color: ${props => props.color  || colors.primary};
`
