import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    // neutral: Palette['primary'];
  }
  interface PaletteOptions {
    // neutral: PaletteOptions['primary'];
  }
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    HEAD2B: React.CSSProperties;
    BODY2M: React.CSSProperties;
    Button2: React.CSSProperties;
  }
  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
    HEAD2B?: React.CSSProperties;
    BODY2M?: React.CSSProperties;
    Button2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    HEAD2B: true;
    BODY2M: true;
    Button2: true;
  }
}
