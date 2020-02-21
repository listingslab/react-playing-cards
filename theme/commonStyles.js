import { makeStyles } from "@material-ui/core/styles"

const drawerWidth = 175;

export default makeStyles(theme => ({
  error: {
    color: theme.palette.error.main
  },
  hPadRight: {
    marginRight: theme.spacing(2)
  },
  padTop: {
    marginTop: theme.spacing(2)
  },
  padRight: {
    marginLeft: theme.spacing(2)
  },
  iconBtnTxt: {
    marginRight: theme.spacing(),
    marginLeft: theme.spacing()
  },
  backdrop: {
    textAlign: 'center',
    zIndex: theme.zIndex.drawer + 1000,
    color: '#fff',
  },
  flex: {
    display: "flex"
  },
  fullViewport: {
    height: "100vh",
    width: "100vw"
  },
  grow: {
    flexGrow: 1
  },
  white: {
    color: 'white'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

}))
