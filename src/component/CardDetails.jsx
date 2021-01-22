import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom'
import { 
  Grid,
  Box, 
  List,
  ListItem,
  ListItemText,
  CardMedia,
  Button,
  Typography,
  Paper,
  Divider
} from '@material-ui/core';

export default function CardGame(props) {
  const {game} = props
  console.log('gamne', game);
  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" alignItems="center" style={{padding:10}}>
        <Paper style={{width:1400, minHeight:600}}>
          <Grid container spacing={1}>
            <Grid item xs={6} style={{padding:30}}>
              <Grid container spacing={3} >
                <Grid item xs={12} style={{paddingBottom: 20}}>
                  <Typography gutterBottom variant="h4" component="h4" align="center">
                    {game?.name}
                  </Typography>
                  <Typography variant="body1" component="p" style={{fontSize:16}} align="center">
                    {game?.publishers.map(e => e.name).join(', ')}
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item xs={6}>
                  <List dense >
                    Genre:
                        <ListItem>
                        <ListItemText
                          primary={game?.genres ? game?.genres.map(e => e.name).join(', ') : "-"}
                        />
                      </ListItem> 
                  </List>
                  <List dense >
                    Released Date:
                        <ListItem>
                        <ListItemText
                          primary={game?.released ? moment(game?.released).format('MMMM Do YYYY') : "-"}
                        />
                      </ListItem> 
                  </List>
                  <List dense >
                    Platforms:
                      {game?.platforms ? game?.platforms.map(platform => 
                        <ListItem>
                        <ListItemText
                          primary={platform.platform.name}
                          secondary={`Released at: ${moment(platform.released_at).format('MMMM Do YYYY')}`}
                        />
                      </ListItem>   
                      ) : '-'}
                  </List>
                  <List dense >
                    ESRB Rating:
                        <ListItem>
                        <ListItemText
                          primary={game?.esrb_rating ? game?.esrb_rating.name : "-"}
                        />
                      </ListItem> 
                  </List>
                  <List dense >
                    Metacritic:
                        <ListItem>
                        <ListItemText
                          primary={game?.metacritic ? game?.metacritic : '-'}
                        />
                      </ListItem> 
                  </List>
                  <List dense >
                    Rating:
                        <ListItem>
                        <ListItemText
                          primary={game?.rating ? `${game?.rating} / 5` : "-"}
                        />
                      </ListItem> 
                  </List>
                  <List dense >
                    Website:
                        <ListItem>
                          {game?.website ? <a href={game?.website}>
                            <ListItemText
                              primary={game?.website}
                            /> 
                          </a> : <ListItemText primary="-" /> }
                      </ListItem> 
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" align="justify" component="p" style={{fontSize:15}}>
                    "{game?.description_raw ? game?.description_raw : '-'}"
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} style={{padding:30}}>
              <Grid container >
                <Grid item xs={12}>
                <CardMedia
                      component="video"
                      alt= {`Game Video ${game?.id}`}
                      height="370"
                      image={game?.clip.clip}
                      title="Game preview"
                      autoPlay
                      // loop
                    />
                </Grid>
                <Grid item xs={12} style={{paddingTop:30}}>
                  <CardMedia
                      component="img"
                      alt= {`Game Image ${game?.id}`}
                      height="350"
                      image={game?.background_image}
                      title="Game image"
                    />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{padding: 30, paddingTop: 0}}>
              <Box display="flex" justifyContent="center" width="full">
                <Link to ="/" style={{width:'100%', textDecoration: 'none'}}>
                  <Button size="large" variant="outlined" disableElevation color="primary" fullWidth>
                    Back
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
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