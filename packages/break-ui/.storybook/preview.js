import { ThemeProvider } from "@mui/material/styles";
import theme from "break-ui/theme";

// .storybook/preview.js

const customViewports = {
  Mobile_360: {
    name: 'Mobile_360',
    styles: {
      width: '360px',
      height: '667px',
    },
  },
  PC_500: {
    name: 'PC_500',
    styles: {
      width: '500px',
      height: '2000px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports, defaultViewport: 'Mobile_360' },
  layout: 'fullscreen'
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];