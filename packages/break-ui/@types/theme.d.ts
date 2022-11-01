import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    // neutral: Palette['primary'];
  }
  interface PaletteOptions {
    // neutral: PaletteOptions['primary'];
  }
  interface TypographyVariants {
    caption2: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    caption2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption2: true;
  }
}
