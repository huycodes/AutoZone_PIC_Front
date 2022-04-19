import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBarComponent'; 
import DisabledTabs from './components/TabComponent';
import SimpleContainer from './components/ReportContainerComponent';
import ExportButtonComponent from './components/ExportButtonComponent';
import ChartComponent from './components/ChartComponent';
import React from 'react';
//Import Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ProductComponent from './components/ProductComponent';

function App() {

  return (
    <div className="App">
    
    <ProductComponent/>
      
    <ResponsiveAppBar sx={{ bgcolor: "green" }}/>
    <DisabledTabs/>
    <SimpleContainer/>
    <ExportButtonComponent/>
    <p></p>
    <div class="flexbox-container" flex-direction="row">
      <div><ChartComponent/></div>
      <div><ChartComponent/></div>
    </div>
    
    

    
   
    
    </div>
  );
}

export default App;
