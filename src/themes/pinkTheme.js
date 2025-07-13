// src/themes/pinkTheme.js
import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

const pinkTheme = createTheme(
  {
    direction: 'rtl',
    palette: {
      primary: {
        main: '#e91e63',
      },
      secondary: {
        main: '#f8bbd0',
      },
    },
    typography: {
      fontFamily: 'Estedad Regular',
    },
  },
  faIR
);

export default pinkTheme;
