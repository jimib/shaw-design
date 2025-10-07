import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  :root {
    --background: 312 31% 8%;
    --foreground: 312 15% 92%;
    --card: 312 25% 12%;
    --card-foreground: 312 15% 92%;
    --popover: 312 25% 12%;
    --popover-foreground: 312 15% 92%;
    --primary: 320 65% 65%;
    --primary-foreground: 312 31% 8%;
    --secondary: 312 20% 18%;
    --secondary-foreground: 312 15% 92%;
    --muted: 312 20% 18%;
    --muted-foreground: 312 10% 65%;
    --accent: 320 65% 65%;
    --accent-foreground: 312 31% 8%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 312 15% 92%;
    --border: 312 20% 20%;
    --input: 312 20% 15%;
    --ring: 320 65% 65%;
    --radius: 0.5rem;
    
    /* Shaw Heritage Design System Extensions */
    --gradient-primary: linear-gradient(135deg, hsl(320 65% 65%) 0%, hsl(330 55% 55%) 100%);
    --gradient-card: linear-gradient(145deg, hsl(var(--card)) 0%, hsl(312 30% 15%) 100%);
    --gradient-vintage: linear-gradient(135deg, hsl(320 45% 25%) 0%, hsl(310 35% 15%) 50%, hsl(300 25% 8%) 100%);
    --shadow-elegant: 0 20px 25px -5px rgba(139, 69, 139, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
    --shadow-glow: 0 0 40px hsl(320 65% 65% / 0.2);
    
    /* Animation variables */
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-spring: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: hsl(var(--background));
    color: hsl(var(--foreground));
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
