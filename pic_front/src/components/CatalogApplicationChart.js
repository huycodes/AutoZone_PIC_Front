import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Legend } from 'recharts';
import CatalogService from '../Services/CatalogService';

export default class CatalogApplicationChart extends React.Component{
    state = { data: []}
    async getData(){
        var tempRows = []
        var apps = 0;
        var curr = new Date(); // get current date
        var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
       
        for (var i = curr.getDay()-1; i >=0 ; --i){
            await CatalogService.getLoadedAppsOn(i).then((response) => {
                apps = response.data
            })

            var curDate = new Date();
            curDate = new Date(curDate.setDate(curDate.getDate()-i)).toLocaleDateString() ;

            if (i == 0) curDate = "Today"

            tempRows.push({date: curDate,
                            MDM: apps+12,
                            Loaded: apps+1});
    };
    this.setState({data: tempRows})
  }

  componentDidMount(){
    this.getData()
  }

    render(){
        return (
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BarChart barSize={40} width={520} height={300} data={this.state.data} barGap={-40} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                
                <CartesianGrid />
                <Legend/>
                <XAxis dataKey="date" />
                <YAxis />
                <Bar dataKey="Loaded" stackId="0"  fill="#D62C27" />
                <Bar dataKey="MDM" stackId="1" fill="#F37F00"  fillOpacity={0.2}/>
            </BarChart>
            </div>
        );
    }
}

