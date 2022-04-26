import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBarComponent'; 
import TabGroup from './components/TabGroup';
import TableContainer from './components/TableContainer';
import ExportButtonComponent from './components/ExportButtonComponent';
import ChartComponent from './components/ChartComponent';
import ChartGroup from './components/ChartGroup';
import React from 'react';
import ChartStack from './components/ChartStack';

//Import Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import LoadedAppsOn from './components/LoadedAppsOn';
import LoadedNotesOn from './components/LoadedNotesOn';
import LoadedProductsOn from './components/LoadedProductsOn';

function App() {

  return (
    <div className="App">
      
    <ResponsiveAppBar/>
    <TabGroup/>
    {/* <div><ChartComponent type='pies'/></div>
    <div><ChartComponent type='aces'/></div> */}
    
    <p><div><ChartStack/></div></p>
    


    <p><div><TableContainer/></div></p>


    

    
   
    
    </div>
  );
}

export default App;
