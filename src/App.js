import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
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
             <Map initialPosition={{ lat: 51.5258541, lng: -0.08040660000006028}} />
         </div>


     );
    }

}

export default App;




