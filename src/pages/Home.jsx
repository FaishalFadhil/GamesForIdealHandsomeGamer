import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import clsx from 'clsx';
import useStylesSidebar from '../hooks/useStylesSidebar'
import CardGame from '../component/CardGame'
import Error from '../component/Error'
// import useFetch from '../hooks/useFetch'
import { setGames, setMoreGames } from "../store/actions/gamesAction";
import { useSelector, useDispatch } from "react-redux";
import { url, opt } from '../config/config'
import { 
  Box, Typography,
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


export default function Home() {
  // const {error, isLoading} = useFetch("https://rawg-video-games-database.p.rapidapi.com/games", {
  //   "method": "GET",
  //   "headers": {
  //     "x-rapidapi-key": "b0a40689f8mshcdee5aca53dff32p1fbfa5jsna5bf13e1fa4c",
  //     "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
  //   }
  // })
  const [ hasMore, changeHasMore] = useState(true)
  const isLoading = useSelector(state => state.gameReducer.isLoading)
  const error = useSelector(state => state.gameReducer.error)
  const games = useSelector(state => state.gameReducer.games)
  const gamesPageUrl = useSelector(state => state.gameReducer.gamesPageUrl)
  const isSidebarOpen = useSelector(state => state.gameReducer.isSidebarOpen)
  const classes = useStylesSidebar()
  const dispatch = useDispatch()

  const fetchMoreData = () => {
    if (games.length >= 500) {
      changeHasMore(false)
      return
    }
    setTimeout(() => {
      dispatch(setMoreGames(gamesPageUrl))
    }, 500);
  }

  useEffect(() => {
    dispatch(setGames(`${url}/games`, opt))
  }, [])


  if (isLoading === true) {
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

  if (error) {
    // console.log(error);
    return <Error error={error} />
  }

  return (
    <React.Fragment>
         <div 
         className={clsx(classes.content, {
            [classes.contentShift]: isSidebarOpen,
         })} 
         style={{padding:'100px 0px 10px 0px', minHeight: '100vh', backgroundColor: '#282c34'}}
         >
          <Typography variant="h4" style={{paddingLeft:50, paddingBottom:20, color:'white'}}>
            Welcome! Check out of our list today! More coming soon!
          </Typography>
            <InfiniteScroll
              dataLength={games?.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={
                <Typography variant="h6" align='center' style={{color:'white'}}>
                  Loading...
                </Typography>
              }
              endMessage={
                <Typography variant="h6" align='center' style={{color:'white'}}>
                  You've reach the end
                </Typography>
              }
            >
              <Box className={classes.drawerHeader} display="flex" flexWrap="wrap" justifyContent="center" >
                {games?.map(game => 
                  <CardGame 
                  key={game.id}
                  game={game}
                  destroy={false}
                  />
                )}
              </Box>
            </InfiniteScroll>
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
    //     "x-rapidapi-key": "b0a40689f8mshcdee5aca53dff32p1fbfa5jsna5bf13e1fa4c",
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
  //       "x-rapidapi-key": "b0a40689f8mshcdee5aca53dff32p1fbfa5jsna5bf13e1fa4c",
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