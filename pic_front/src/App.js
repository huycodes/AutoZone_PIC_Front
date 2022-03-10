import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/AppBarComponent'; 
import DisabledTabs from './components/TabComponent';
import SimpleContainer from './components/ReportContainerComponent';
import FloatingActionButtons from './components/ExportButtonComponent';
//Import Font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  
  return (
    <div className="App">

      
    <ResponsiveAppBar sx={{ bgcolor: "green" }}/>
    <DisabledTabs/>
    <SimpleContainer/>
    <FloatingActionButtons/>
    </div>
  );
}

export default App;
