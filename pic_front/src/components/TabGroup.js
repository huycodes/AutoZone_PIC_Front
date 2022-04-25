import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TableComponent from './TableComponent';

// export default function TabGroup() {
//   const [value, setValue] = React.useState(2);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered>
//       <Tab label="Last 3 days" />
//       <Tab label="Last week" />
//       <Tab label="Last 2 weeks" />
//       <Tab label="Last month" />
//     </Tabs>
//   );
// }


export default class TabGroup extends React.Component{
  
  state = {value: ''}

  handleChange = (event, newValue) => {
    
  };

  render() {
    return (   <Tabs value={Tabs.label} onChange={this.handleChange} centered>
    <Tab label="Last 3 days" />
    <Tab label="Last week" />
    <Tab label="Last 2 weeks" />
    <Tab label="Last month" />
  </Tabs>
  );
  }
 
}