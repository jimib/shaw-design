import "styled-components";
import { colors, spacing, typography } from "../tokens";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    spacing: typeof spacing;
    typography: typeof typography;
  }
}
