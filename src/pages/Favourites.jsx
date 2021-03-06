import React from 'react';
import clsx from 'clsx';
import useStylesSidebar from '../hooks/useStylesSidebar'
import CardGame from '../component/CardGame'
import { useSelector } from 'react-redux'
import Button from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useHistory } from 'react-router-dom'
import { 
  Box,
  Typography
  // Grid,
  // Drawer,
  // Divider,
  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemText,
  // Toolbar
 } from '@material-ui/core';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';


export default function Favourites() {
  const history = useHistory()
  const favourites = useSelector(state => state.favouriteReducer.favourites)
  const isSidebarOpen = useSelector(state => state.gameReducer.isSidebarOpen)
  const classes = useStylesSidebar()

  function goHome() {
    history.push(`/`);
  }


  if (!favourites) {
    return (
      <React.Fragment>
        <div 
         className={clsx(classes.content, {
            [classes.contentShift]: isSidebarOpen,
         })} 
         style={{padding:'100px 0px 0px 0px', minHeight: '100vh', backgroundColor: '#282c34'}}
         >
          <Box display="flex" justifyContent="center" alignItems="center">
            <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ekkz8gbg.json"  background="transparent"  speed="1"  style={{width: 600, height: 600}}  loop  autoplay />
          </Box>
        </div>
       </React.Fragment>
    )
  } 

  if (favourites.length === 0) {
    return (
      <React.Fragment>
        <div 
         className={clsx(classes.content, {
            [classes.contentShift]: isSidebarOpen,
         })} 
         style={{padding:'100px 0px 0px 0px', minHeight: '100vh', backgroundColor: '#282c34'}}
         >
          <Box display="flex" justifyContent="center" alignItems="center">
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_hVXorn.json"  background="transparent"  speed="1"  style={{width: 600, height: 600}}  loop autoplay />
            <Box style={{width:600}}>
              <Typography variant="h4" style={{color:'white'}}>
                Whoaa, I think you don't have any favourites here. Go find one!
              </Typography>
              <Button style={{color:'white', fontSize:25, paddingLeft:0}} onClick={() => goHome()}>
                Back
              </Button>
            </Box>
          </Box>
        </div>
       </React.Fragment>
    )
  } 

  return (
    <React.Fragment>
         <div 
         className={clsx(classes.content, {
            [classes.contentShift]: isSidebarOpen,
         })} 
         style={{padding:'100px 0px 10px 0px', minHeight: '100vh', backgroundColor: '#282c34'}}
         >
          <Typography variant="h4" style={{paddingLeft: 50,paddingBottom:10, color:'white'}}>
            Is this your favourites? Sounds good to me!
          </Typography>
          <Button style={{paddingLeft: 50,paddingBottom:20, color:'white'}} onClick={() => goHome()}>
            <ChevronLeftIcon /> Back
          </Button>
          <Box className={classes.drawerHeader} display="flex" flexWrap="wrap" justifyContent="center" >
            {favourites?.map(game => 
              <CardGame 
              key={game.id}
              game={game}
              destroy= {true}
              />
            )}
          </Box>
                {/* <Grid container spacing={1}>
                  <Grid item xs={1}>
                  </Grid>
                  <Grid item xs={11}>
                  </Grid>
                </Grid> */}
         </div>
    </React.Fragment>
  ) 
}

//pagination

// class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//       games: [],
//       isloading: false
//      }
//   }

//   componentDidMount() {
//     this.fetchAll()
//     // fetchTeams()
//   }

//   fetchAll(){
//     this.setState({
//       isloading: true
//     })
    // fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
    //   "method": "GET",
    //   "headers": {
    //     "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    //     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
    //   }
    // })
    // .then(response => response.json())
    // .then(response => {
    //   this.setState({
    //     games: response.results
    //   })
    //   return fetch(response.next)})
    // .then(response => response.json())
    // .then(response => {
    //   this.setState({
    //     games: this.state.games.concat(response.results)
    //   })
    //   return fetch(response.next)
    // })
    // .then(response => response.json())
    // .then(response => {
    //   this.setState({
    //     games: this.state.games.concat(response.results),
    //     isloading: false
    //   })
    //   console.log(this.state.games);
    // })
//     .catch(err => {
//       console.error(err);
//     });
//   }

//   render() { 
//     if (this.state.isloading === true) {
//       return (
//         <React.Fragment>
//           <Navbar />
//           <Box display="flex" justifyContent="center" alignItems="center" className='home'>
//             <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ekkz8gbg.json"  background="transparent"  speed="1"  style={{width: 600, height: 600}}  loop  autoplay />
//           </Box>
//         </React.Fragment>
//       )
//     } else {
//       return (
//         <React.Fragment>
//           <div style={{display:'flex'}}>
//             <Navbar />
//             <div className='home' style={{padding:'100px 30px 10px 30px'}}>
//               <Box display="flex" flexWrap="wrap" justifyContent="center" >
//                 {this.state.games.map(game => 
//                   <CardGame 
//                   key={game.id}
//                   game={game}
//                   />
//                 )}
//               </Box>
//               {/* <Grid container spacing={1}>
//                 <Grid item xs={1}>
//                 </Grid>
//                 <Grid item xs={11}>
//                 </Grid>
//               </Grid> */}
//             </div>
//           </div>
//         </React.Fragment>
//       ) 
//     }
//   }
// }

// export default Home;

  // const [games, setGames] = useState([])
  // const [isLoading, setLoading] = useState(false)
  // const [error, setError] = useState(null)

  // useEffect(()=>{
  //   setLoading(true)
  //   console.log(isLoading, 'here');
  //   fetch("https://rawg-video-games-database.p.rapidapi.com/games", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-key": process.env.RAPIDAPI_KEY,
  //       "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
  //     }
  //   })
  //     .then(response => {
  //       console.log(response);
  //       if (response.ok) {
  //         return response.json()
  //       } else {
  //         setError(response)
  //       }
  //     })
  //     .then(response => {
  //       console.log(response);
  //       setGames(games.concat(response.results))
  //       setLoading(false)
  //     })
  //     .finally(() => {
  //       setLoading(false)
  //     })
  // }, [])