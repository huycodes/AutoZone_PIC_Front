import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBarComponent'; 
import TabGroup from './components/TabGroup';
import TableContainer from './components/TableContainer';
import ExportButtonComponent from './components/ExportButtonComponent';
import React, {useState} from 'react';
import ChartStack from './components/ChartStack';

//Import Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {


  
  return (
    <div className="App">
      
    <ResponsiveAppBar/>
    
    <div><h1><font color="blue">Weekly Overview</font></h1></div>
    
    {/* <div><ChartComponent type='pies'/></div>
    <div><ChartComponent type='aces'/></div> */}
    
    <p><div><ChartStack/></div></p>
    
    <TabGroup/>

    <p><div><TableContainer/></div></p>


    

    
   
    
    </div>
  );
}

export default App;
