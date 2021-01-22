import React from 'react';
import Navbar from './Navbar';
import useFetch from '../hooks/useFetch'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from "react-redux";
import { changeSidebar } from '../store/actions/gamesAction'
import { url, opt } from '../config/config'



export default function Header() {

  const {data:genres} = useFetch(`${url}/genres`, opt)


  const dispatch = useDispatch() 
  const isSidebarOpen = useSelector(state => state.gameReducer.isSidebarOpen)

  const handleDrawerisSidebarOpen = () => {
    dispatch(changeSidebar(true))
  };

  const handleDrawerClose = () => {
    dispatch(changeSidebar(false))
  };


  return (
    <React.Fragment>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          handleDrawerisSidebarOpen={(res) => handleDrawerisSidebarOpen(res)}
          />
         <Sidebar 
         isSidebarOpen={isSidebarOpen}
         handleDrawerClose={(res) => handleDrawerClose(res)}
         genres={genres}
         />
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