import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function DisabledTabs() {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered>
      <Tab label="Last 3 days" />
      <Tab label="Last week" />
      <Tab label="Last 2 weeks" />
      <Tab label="Last month" />
    </Tabs>
  );
}
