import React from 'react';
import clsx from 'clsx';
import useStylesSidebar from '../hooks/useStylesSidebar'
import CardGame from '../component/CardGame'
import useSearch from '../hooks/useSearch'
import Error from '../component/Error'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useSelector } from "react-redux";
import { useHistory, useLocation } from 'react-router-dom'
import { 
  Box, 
  Typography,
  Button
 } from '@material-ui/core';


export default function Search() {
  const games = useSelector(state => state.gameReducer.games)
  const isSidebarOpen = useSelector(state => state.gameReducer.isSidebarOpen)
  const classes = useStylesSidebar()
  const history = useHistory()
  const isLoading = useSelector(state => state.gameReducer.isLoading)
  const error = useSelector(state => state.gameReducer.error)
  
  
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery()
  const searchWord = query.get('name')
  
  const {data:searchedGames} = useSearch(games, searchWord)

  function goHome() {
    history.push(`/`);
  }

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

  if (searchedGames?.length === 0) {
    return (
      <React.Fragment>
        <div 
         className={clsx(classes.content, {
            [classes.contentShift]: isSidebarOpen,
         })} 
         style={{padding:'100px 0px 0px 0px', minHeight: '100vh', backgroundColor: '#282c34'}}
         >
          <Box display="flex" justifyContent="center" alignItems="center">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_HBXF2O.json"  background="transparent"  speed="1"  style={{width: 600, height: 600}}  loop autoplay />
            <Box style={{width:600}}>
              <Typography variant="h4" style={{color:'white'}}>
                Sorry, we can't find you "{searchWord}" games {":("}
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

  if (!searchWord) {
    return (
      <React.Fragment>
        <div 
         className={clsx(classes.content, {
            [classes.contentShift]: isSidebarOpen,
         })} 
         style={{padding:'100px 0px 0px 0px', minHeight: '100vh', backgroundColor: '#282c34'}}
         >
          <Box display="flex" justifyContent="center" alignItems="center">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_HBXF2O.json"  background="transparent"  speed="1"  style={{width: 600, height: 600}}  loop autoplay />
            <Box style={{width:600}}>
              <Typography variant="h4" style={{color:'white'}}>
                Hmm.. I think there's no search word you looking for right?
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
            We found {searchedGames?.length} games with word "{searchWord}" included
          </Typography>
          <Button style={{paddingLeft: 50,paddingBottom:20, color:'white'}} onClick={() => goHome()}>
            <ChevronLeftIcon /> Back
          </Button>
          <Box className={classes.drawerHeader} display="flex" flexWrap="wrap" justifyContent="center" >
            {searchedGames?.map(game => 
              <CardGame 
              key={game.id}
              game={game}
              destroy= {false}
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

// class Tag extends Component {
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
//           <Box display="flex" justifyContent="center" alignItems="center" className='Tag'>
//             <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ekkz8gbg.json"  background="transparent"  speed="1"  style={{width: 600, height: 600}}  loop  autoplay />
//           </Box>
//         </React.Fragment>
//       )
//     } else {
//       return (
//         <React.Fragment>
//           <div style={{display:'flex'}}>
//             <Navbar />
//             <div className='Tag' style={{padding:'100px 30px 10px 30px'}}>
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

// export default Tag;

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