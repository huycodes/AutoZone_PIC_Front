import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBarComponent'; 
import TabGroup from './components/TabGroup';
import TableContainer from './components/TableContainer';
import ExportButtonComponent from './components/ExportButtonComponent';
import ChartComponent from './components/ChartComponent';
import React from 'react';
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
      
    <ResponsiveAppBar sx={{ bgcolor: "green" }}/>
    <TabGroup/>
    <TableContainer/>

    <p></p>
    {/* <div class="flexbox-container" flex-direction="row">
      <div><ChartComponent/></div>
      <div><ChartComponent/></div>
    </div> */}
    
    

    
   
    
    </div>
  );
}

export default App;
