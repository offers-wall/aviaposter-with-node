import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    // action: {
    //   active: '',
    //   disabled: '',
    //   disabledBackground: '',
    //   hover: '',
    //   selected: '',
    // },
    background: {
      default: '#252525',
      paper: '#828267',
    },
    // divider: '',
    primary: {
      main: '#BB0016',
      // light: '',
      // dark: '',
    },
    secondary: {
      main: '#ffffff',
      // light: '',
      // dark: '',
    },
    // error: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // warning: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // info: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    // success: {
    //   main: '',
    //   light: '',
    //   dark: '',
    // },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
      // disabled: '',
    },
  },
  // spacing: 0,
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    // MuiPaper: {
    //   styleOverrides: {
    //     root: {
    //       background: '',
    //     },
    //   },
    // },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        a: {
          color: 'inherit',
          textDecoration: 'none',
          '&:hover': {
            color: 'inherit',
          },
        },
        address: { fontStyle: 'normal' },
        img: {
          height: 'auto',
          display: 'block',
        },
        ul: { margin: 0, padding: 0, listStyle: 'none' },
      },
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export default responsiveTheme;
