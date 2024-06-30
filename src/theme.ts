import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#0000',
      },
      secondary: {
        main: '#363636',
      },
    },
    typography:{
        fontFamily:"Calibri"
    }
  });

  theme = responsiveFontSizes(theme);

  export default theme;