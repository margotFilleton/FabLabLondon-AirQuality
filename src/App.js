import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import connexion from './connexion';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Bar from './Components/topBar';
import Map from './Components/map';

class App extends Component {

    componentWillMount() {
        injectTapEventPlugin();
    }


    render() {
     return(
         <div>
             <MuiThemeProvider>
                 <Bar />

             </MuiThemeProvider>
             <Map />
         </div>


     );
    }

}

export default App;




