import styled from 'styled-components';
import colors from '@/styles/theme/colors';
import theme from '@/styles/theme/theme';

export const Container = styled.section`
  text-align: center;
  background: radial-gradient(65% 50% at -5% 100%, #B23485 0%, rgba(178, 52, 133, 0) 100%),
              radial-gradient(65% 50% at 100% 100%, #D34C4C 0%, rgba(211, 76, 76, 0) 100%),
              linear-gradient(180deg, #3C308C 0%, rgba(60, 48, 140, 0.75) 115%);
  backdrop-filter: blur(10px);
`

export const Summary = styled.section`
  padding: ${theme.space.xl} 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    flex: 1;
  }
`

export const SummaryText = styled.p`
  text-align: left;
  flex: 2;
  font-size: ${theme.fontSizes.normal};
  color: ${colors.white};
  padding: 0 ${theme.space.lg};

  strong {
    font-weight: bold;
  }
`

export const SocialMedia = styled.section`
  padding: 0 ${theme.space.lg};

  h6 {
    font-size: ${theme.fontSizes.normal};
    font-weight: bold;
    text-align: left;
    color: ${colors.white};
    padding-bottom: ${theme.space.lg};
  }
`

export const SocialMediaTags = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${theme.space.xl};

  li {
    transition: all .3s ease;

    :hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`
