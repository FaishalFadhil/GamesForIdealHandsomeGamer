import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStylesSidebar from '../hooks/useStylesSidebar'
import joystick from '../assets/joystick.png'
import { CardMedia, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { changeSelectedIndex } from '../store/actions/gamesAction'
import { useSelector, useDispatch } from "react-redux";



export default function Sidebar(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  const classes = useStylesSidebar();
  const theme = useTheme();
  const {isSidebarOpen, genres, handleDrawerClose} = props
  const selectedIndex = useSelector(state => state.gameReducer.selectedIndex)
  // const [selectedIndex, setSelectedIndex] = useState(null);

  const handleListItemClick = (event, index) => {
    event.preventDefault()
    switch (index) {
      case 'home':
        dispatch(changeSelectedIndex(index))
        history.push('/')
        break;
      case 'favourites':
        dispatch(changeSelectedIndex(index))
        history.push('/favourites')
        break;
      default:
        dispatch(changeSelectedIndex(index))
        history.push(`/genres/${index}`)
        break;
    }
  };

  return (
    <React.Fragment>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        color='#eeeeee'
        open={isSidebarOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <CardMedia
              component="img"
              alt= "GFIHG Logo"
              height="50"
              image={joystick}
              title="GFIHG Logo"
            />
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <a href="https://github.com/FaishalFadhil" style={{textDecoration:'none'}}>
          <Typography variant="body2" style={{paddingLeft:8}}>
            ©2021 FaishalFadhil
          </Typography>
        </a>
        <Divider />
        <ListItem 
        button
        selected={selectedIndex === 'home'}
        onClick={(event) => handleListItemClick(event, 'home')}
        >
          Home
        </ListItem>
        <ListItem 
        button
        selected={selectedIndex === 'favourites'}
        onClick={(event) => handleListItemClick(event, 'favourites')}
        >
          Favourites
        </ListItem>
        <Divider />
        <List dense>
          Genres:
          {genres? genres?.map((genre) => (
            <ListItem 
              button key={genre.id}
              selected={selectedIndex === genre.id}
              onClick={(event) => handleListItemClick(event, genre.name)}
              >
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={genre.name} />
            </ListItem>
          )) : ''}
        </List>
        <Divider />
        <List dense>
          Credits:
          <ListItem>
            <a href="https://rapidapi.com/accujazz/api/rawg-video-games-database?endpoint=apiendpoint_e4e2766f-1422-4b88-bd10-22acdb7c9a16" style={{textDecoration:'none'}}>
            Rapid API - RAWG Video Games Database
            </a>
          </ListItem>
        </List>
        
      </Drawer>
    </React.Fragment>
  );
}



// return (
  //   // <div className={classes.root}>
  //     {/* <CssBaseline />
  //     <AppBar
  //       position="fixed"
  //       className={clsx(classes.appBar, {
  //         [classes.appBarShift]: isSidebarOpen,
  //       })}
  //     >
  //       <Toolbar>
  //         <IconButton
  //           color="inherit"
  //           aria-label="isSidebarOpen drawer"
  //           onClick={handleDrawerisSidebarOpen}
  //           edge="start"
  //           className={clsx(classes.menuButton, isSidebarOpen && classes.hide)}
  //         >
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography variant="h6" noWrap>
  //           Persistent drawer
  //         </Typography>
  //       </Toolbar>
  //     </AppBar> */}
  //     <Drawer
  //       className={classes.drawer}
  //       variant="persistent"
  //       anchor="left"
  //       isSidebarOpen={isSidebarOpen}
  //       classes={{
  //         paper: classes.drawerPaper,
  //       }}
  //     >
  //       <div className={classes.drawerHeader}>
  //         <IconButton onClick={handleDrawerClose}>
  //           {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
  //         </IconButton>
  //       </div>
  //       <Divider />
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Drawer>
  //     {/* <main
  //       className={clsx(classes.content, {
  //         [classes.contentShift]: isSidebarOpen,
  //       })}
  //     >
  //       <div className={classes.drawerHeader} />
  //       <Typography paragraph>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  //         ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
  //         facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
  //         gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
  //         donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
  //         adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
  //         Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
  //         imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
  //         arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
  //         donec massa sapien faucibus et molestie ac.
  //       </Typography>
  //       <Typography paragraph>
  //         Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
  //         facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
  //         tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
  //         consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
  //         vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
  //         hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
  //         tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
  //         nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
  //         accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
  //       </Typography>
  //     </main> */}
  //   // </div>
  // );