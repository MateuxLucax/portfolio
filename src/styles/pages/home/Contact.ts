import theme from "@/styles/theme/theme";
import styled from "styled-components";

export const Container = styled.section`
  background: radial-gradient(50% 40% at 0% 50%, #3C308C 0%, rgba(60, 48, 140, 0) 100%),
              radial-gradient(90% 70% at 100% 100%, #B23485 0%, rgba(178, 52, 133, 0) 100%),
              linear-gradient(180deg, #010726 0%, rgba(0, 0, 0, 0.75) 100%, rgba(1, 7, 38, 0.75) 100%);
  backdrop-filter: blur(1rem);
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    text-align: center;
    padding-bottom: ${theme.space.lg};
  }

  button {
    margin: ${theme.space.xl} auto;
  }

  p {
    padding-bottom: ${theme.space.lg};
  }

  padding: 0 ${theme.space.lg};
  padding-bottom: var(--navbarHeight);
`
