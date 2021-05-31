import styled from "styled-components";
import colors from "./theme/colors";
import theme from "./theme/theme";

export const InputPrimary = styled.input`
  background: none;
  border: .2rem solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  padding: ${theme.space.sm};
  font-size: ${theme.fontSizes.normal};

  ::placeholder {
    color: ${props => props.theme.color};
  }
`

export const TextAreaPrimary = styled.textarea`
  background: none;
  border: .2rem solid ${props => props.theme.borderColor};
  color: ${props => props.theme.color};
  padding: ${theme.space.sm};
  font-size: ${theme.fontSizes.normal};
  min-height: 6.4rem;
  resize: vertical;

  ::placeholder {
    color: ${props => props.theme.color};
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    padding-bottom: ${theme.space.sm}
  }

  :not(:last-child) {
    margin-bottom: ${theme.space.lg}
  }
`

export const InputLabel = styled.label`
  font-size: ${theme.fontSizes.normal};
  font-weight: bold;
  color: ${props => props.color  || colors.primary};
`

export const inputPrimaryTheme = {
  borderColor: colors.primary,
  color: colors.primary,
};

export const inputWhiteTheme = {
  borderColor: colors.white,
  color: colors.white,
};
