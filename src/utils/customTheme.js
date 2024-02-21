import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#659dbd',
      variant1: '#daad86',
    },
    secondary: {
      main: '#daad86',
    },
    bgColor: '#1b2839',
    blinkerBg: '#095219',
    blinkerText: 'white',
    buttonColor: '#659dbd',
    clear:'#5e0111',
    submit: '#306e01',
  },
  typography: {
    fontFamily: "Comfortaa"
  },
});

export default theme;
