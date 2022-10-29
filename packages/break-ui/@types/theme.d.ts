import * as createPalette from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
    interface Palette {
      neutral: Palette['primary'];
    }
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
    }
}
  