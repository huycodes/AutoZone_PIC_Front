
import './App.css';
import ResponsiveAppBar from './components/AppBarComponent'; 
import TabGroup from './components/TabGroup';
import TableContainer from './components/TableContainer';
import React, {useState} from 'react';


//Import Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import OverviewGroup from './components/OverviewGroup';
import CustomDivider from './components/Divider';

function App() {


  
  return (
    <div className="App">
      <ResponsiveAppBar/>
    

    <OverviewGroup />
    <p></p>
    <CustomDivider/>
    <TabGroup/>

<p><div><TableContainer/></div></p>

    
   
    
    </div>
  );
}

export default App;
