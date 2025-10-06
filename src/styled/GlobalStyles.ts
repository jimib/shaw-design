import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: ${({ theme }) => theme.typography.fontFamily.sans.join(", ")};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.textStyles.h1.fontSize};
    font-weight: ${({ theme }) => theme.typography.textStyles.h1.fontWeight};
    line-height: ${({ theme }) => theme.typography.textStyles.h1.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.textStyles.h1.letterSpacing};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.textStyles.h2.fontSize};
    font-weight: ${({ theme }) => theme.typography.textStyles.h2.fontWeight};
    line-height: ${({ theme }) => theme.typography.textStyles.h2.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.textStyles.h2.letterSpacing};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.textStyles.h3.fontSize};
    font-weight: ${({ theme }) => theme.typography.textStyles.h3.fontWeight};
    line-height: ${({ theme }) => theme.typography.textStyles.h3.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.textStyles.h3.letterSpacing};
  }

  h4 {
    font-size: ${({ theme }) => theme.typography.textStyles.h4.fontSize};
    font-weight: ${({ theme }) => theme.typography.textStyles.h4.fontWeight};
    line-height: ${({ theme }) => theme.typography.textStyles.h4.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.textStyles.h4.letterSpacing};
  }

  h5 {
    font-size: ${({ theme }) => theme.typography.textStyles.h5.fontSize};
    font-weight: ${({ theme }) => theme.typography.textStyles.h5.fontWeight};
    line-height: ${({ theme }) => theme.typography.textStyles.h5.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.textStyles.h5.letterSpacing};
  }

  h6 {
    font-size: ${({ theme }) => theme.typography.textStyles.h6.fontSize};
    font-weight: ${({ theme }) => theme.typography.textStyles.h6.fontWeight};
    line-height: ${({ theme }) => theme.typography.textStyles.h6.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.textStyles.h6.letterSpacing};
  }

  p {
    margin: 0 0 1rem 0;
    font-size: ${({ theme }) => theme.typography.textStyles.body.fontSize};
    font-weight: ${({ theme }) => theme.typography.textStyles.body.fontWeight};
    line-height: ${({ theme }) => theme.typography.textStyles.body.lineHeight};
    letter-spacing: ${({ theme }) =>
      theme.typography.textStyles.body.letterSpacing};
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }

  input, textarea, select {
    font-family: inherit;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryHover};
      text-decoration: underline;
    }
  }

  code {
    font-family: ${({ theme }) => theme.typography.fontFamily.mono.join(", ")};
    font-size: 0.875em;
    background: ${({ theme }) => theme.colors.gray[100]};
    padding: 0.125rem 0.25rem;
    border-radius: 0.25rem;
  }

  pre {
    font-family: ${({ theme }) => theme.typography.fontFamily.mono.join(", ")};
    background: ${({ theme }) => theme.colors.gray[100]};
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
  }
`;
