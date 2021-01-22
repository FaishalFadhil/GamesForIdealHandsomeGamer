import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from '../store/actions/favoritesAction'
import { toast } from 'react-toastify';
import StarsIcon from '@material-ui/icons/Stars';
// import useaddFavourite from '../hooks/useaddFavourite'
import { 
  Box, 
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Typography
} from '@material-ui/core';

export default function CardGame(props) {
  const history = useHistory()
  const {game, destroy} = props
  const [favouriteStatus, changeFavourite] = useState(false)
  const favourites = useSelector(state => state.favouriteReducer.favourites)
  const games = useSelector(state => state.gameReducer.games)
  const dispatch = useDispatch()

  const addFavourite = (id) => {
    // console.log(id);
    const getGame = games.filter(game => game.id === id)
    // console.log(getGame);
    const sameGame = favourites.filter(favourite => favourite.id === getGame[0].id)
    // console.log(sameGame);
    // console.log(sameGame);
    if (sameGame.length === 0) {
      dispatch(setFavourites([...favourites, game]))
      // console.log('DONE!');
      toast.success(`🦄 Success! Wonderfull you add "${game.name}" to your favourite `, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  const deleteFromFavourite = (id) => {
    // console.log(id);
    const getGame = games.filter(game => game.id === id)
    // console.log(getGame);
    const sameGame = favourites.filter(favourite => favourite.id !== getGame[0].id)
    // console.log("here", sameGame);
    dispatch(setFavourites(sameGame))
    // console.log(sameGame);
    toast.success(`🚀 Success! Did you deleting "${game.name}" from your list? It's okay, we'll find another `, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  useEffect(()=>{
    // console.log(favourites);
    const sameGame = favourites.filter(favourite => favourite.id === game.id)
    // console.log(sameGame);
    if (sameGame.length > 0) {
      changeFavourite(true)
      // console.log('here');
    }
  }, [favourites, game.id])

  function handleClick() {
    history.push(`/games/${game.id}`);
  }


  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" alignItems="center" style={{padding:10}}>
        <Card style={{width:270, height:380}}>
          <CardActionArea onClick={() => handleClick()}>
            <CardMedia
              component="img"
              alt= {`Games Image ${game.id}`}
              height="150"
              image={game.background_image}
              title="Games image"
            />
            <CardContent>
              <div style={{height:50}}>
                <Typography gutterBottom variant="h6" component="h6" style={{fontSize:16}}>
                  {game.name}
                </Typography>
              </div>
              <div style={{height:95}}>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:13}}>
                  Genre: {game.genres.map(e => e.name).join(', ')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:13}}>
                  Released Date: {moment(game.released).format('MMMM Do YYYY')}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:13}}>
                  Metacritic: {game.metacritic ? game.metacritic : '-'}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:13}}>
                  Rating: {game.rating} / 5
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:13}}>
                  **Click card for more info
                </Typography>
              </div>
            </CardContent>
          </CardActionArea>
          <Box display="flex" justifyContent="center" alignItems="center" style={{height:50}}>
            {favouriteStatus === false ? 
            <IconButton size="small" color="primary" onClick={() => addFavourite(game.id)}>
              <StarsIcon />
            </IconButton> : ''}
            {destroy === true ? 
            <Button size="small" color="primary" onClick={() => deleteFromFavourite(game.id)}>
              Delete
            </Button> : ''}
          </Box>
        </Card>
      </Box>
    </React.Fragment>
  )
}

// class CardGame extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
      
//      );
//   }
// }
 
// export default CardGame;