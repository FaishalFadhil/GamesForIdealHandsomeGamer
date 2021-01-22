import React, { useState } from 'react';
import clsx from 'clsx';
import useStylesSidebar from '../hooks/useStylesSidebar'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { debounce } from "lodash";
import { Link, useHistory } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'
import { changeIsLoading } from "../store/actions/gamesAction";
import {
  AppBar,
  Toolbar,
  InputBase,
  Typography,
  IconButton,
  Button,
  Box
} from '@material-ui/core';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Navbar(props){
  const classes = useStyles()
  const {isSidebarOpen, handleDrawerisSidebarOpen} = props
  const dispatch = useDispatch()
  const history = useHistory()
  const [input, setInput] = useState('')

  const doSearch = debounce((text) => {
    dispatch(changeIsLoading(true))
    // console.log(text);
    history.push(`/search?name=${text}`)
    setInput('')
    dispatch(changeIsLoading(false))
  }, 1000)

  return ( 
    <React.Fragment>
      <AppBar 
        position="fixed" 
        style={{backgroundColor:'#ffd369', color:'#393e46'}} 
        className={clsx(classes.appBar, {
            [classes.appBarShift]: isSidebarOpen,
        })}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="isSidebarOpen drawer"
            onClick={handleDrawerisSidebarOpen}
            edge="start"
            className={clsx(classes.menuButton, isSidebarOpen && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" style={{width:'50%'}}>
            <Typography variant="h6" noWrap>
              Games For Ideal Handsome Gamer
            </Typography>
          </Box>
          <Box display="flex" style={{width:'50%'}} justifyContent="flex-end" alignItems='center'>
            <Link to='/favourites' style={{textDecoration:'none'}}> 
              <Button variant="outlined">
                favourites 
              </Button>
            </Link>
            {/* <Typography variant="h6" noWrap>
              Games for ideal Handsome gamer
            </Typography> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                value={input}
                onChange={e => {
                  setInput(e.target.value)
                  doSearch(e.target.value)
                }}
                placeholder="Search game…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
   );
}

// class Navbar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   handleMenu(event){
//     event.preventDefault()
//     // this.props.logout()
//   };
//   render() { 
   
//   }
// }
 
// export default Navbar;

          // {/* <Typography variant="h6" style={{flexGrow: 1}}>
          //     {localStorage.getItem('access_token') ? `Welcome ${localStorage.getItem('fullname')}! Here's your tasks` : ''}
          // </Typography>
          // {localStorage.getItem('access_token') && (
          //   <Button
          //   variant="outlined"
          //   onClick={(event) => this.handleMenu(event)}
          //   color="inherit"
          //   >
          //     Logout
          //   </Button> 
          // )} */}