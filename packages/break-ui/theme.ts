import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#556cd6',
    // },
  },
  typography: {
    fontFamily: ['Pretendard'].join(','),
    caption2: {
      fontWeight: 600,
      fontSize: '10px',
      lineHeight: '15px',
    },
  },
});

export default theme;
