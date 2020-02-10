import { createMuiTheme } from "@material-ui/core";

export default createMuiTheme({
  palette: {
    type:'light',
    primary: {
       // light: will be calculated from palette.primary.main,
      main: '#5cb646',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#aedaa3'
    } 
    
    // secondary: {
    //   light: '#0066ff',
    //   main: '#0044ff',
    //   dark: will be calculated from palette.secondary.main,
    //   contrastText: '#ffcc00',
    // },
    // error: will use the default color
    },
});
   