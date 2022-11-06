import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#556cd6',
    // },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: 'Pretendard',
      },
    },
  },
  typography: {
    fontFamily: ['Pretendard'].join(','),
    caption1: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '18px',
    },
    caption2: {
      fontWeight: 600,
      fontSize: '10px',
      lineHeight: '15px',
    },
    HEAD2B: {
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '32px',
    },
    BODY2M: {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '26px',
    },
    Button2: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '22px',
    },
  },
});

export default theme;
