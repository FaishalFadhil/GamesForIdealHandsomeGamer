import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/Header'
import Home from './pages/Home'
import React from 'react';
import Detail from './pages/Details'
import Tag from './pages/TagPage'
import Favourites from './pages/Favourites'
import Search from './pages/SearchPage'
import useStylesSidebar from './hooks/useStylesSidebar'
import { ToastContainer } from 'react-toastify'
import { CssBaseline } from '@material-ui/core';
import {
  Switch,
  Route
} from "react-router-dom"
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Righteous', 
      'cursive'
    ].join(','),
  },});

export default function App() {
  const classes = useStylesSidebar()

  return ( 
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <ToastContainer />
        <CssBaseline />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/games/:id">
            <Detail/>
          </Route>
          <Route path="/genres/:tag">
            <Tag/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/favourites">
            <Favourites/>
          </Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 
//       <div className='App'>
//         <Home/>
//       </div>
//     );
//   }
// }
 
// export default App;
