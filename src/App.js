import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import connexion from './connexion';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './Components/TopBar';

class App extends Component {

    componentWillMount() {
        injectTapEventPlugin();
    }


    render() {
     return(
         <MuiThemeProvider>
             <MyAwesomeReactComponent />
         </MuiThemeProvider>

     );
    }

}

export default App;




