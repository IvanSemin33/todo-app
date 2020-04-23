import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    body2: {
      fontFamily: 'Arial',
      fontSize: 15,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      input: {
        fontFamily: 'Arial',
        fontSize: 15,
      },
    },
    MuiInputLabel: {
      root: {
        fontFamily: 'Arial',
        fontSize: 15,
      },
    },
    MuiGrid: {
      item: {
        maxWidth: '100%',
      },
      container: {
        maxWidth: '100%',
      },
    },
  },
})
