import { PrimaryButton, whiteTheme } from '@/styles/Buttons';
import {
  InputGroup,
  InputLabel,
  InputPrimary,
  inputWhiteTheme,
  TextAreaPrimary,
} from '@/styles/Inputs';
import { Container } from '@/styles/pages/home/Contact';
import colors from '@/styles/theme/colors';
import { Paragraph, Subtitle } from '@/styles/Typography';
import { useForm, ValidationError } from '@formspree/react';

interface ContactProps {
  title: string;
  description: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  buttonText: string;
}

export default function Contact(props: ContactProps) {
  const [state, handleSubmit] = useForm('xpzkdloq');

  return (
    <Container>
      <Subtitle color={colors.white}>{props.title}</Subtitle>
      <Paragraph color={colors.white}>{props.description}</Paragraph>
      <form onSubmit={handleSubmit}>
        <div>
          <InputGroup>
            <InputLabel color={colors.white} htmlFor="email">
              {props.emailLabel}
            </InputLabel>
            <InputPrimary
              theme={inputWhiteTheme}
              placeholder={props.emailPlaceholder}
              id="email"
              type="email"
              name="email"
            />
          </InputGroup>
          <InputGroup>
            <InputLabel color={colors.white} htmlFor="message">
              {props.messageLabel}
            </InputLabel>
            <TextAreaPrimary
              theme={inputWhiteTheme}
              placeholder={props.messagePlaceholder}
              id="message"
              name="message"
            />
          </InputGroup>
        </div>
        <PrimaryButton
          type="submit"
          disabled={state.submitting}
          theme={whiteTheme}
        >
          {props.buttonText}
        </PrimaryButton>
      </form>
    </Container>
  );
}
