import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Legend } from 'recharts';
import CatalogService from '../Services/CatalogService';

export default class CatalogApplicationChart extends React.Component{
    state = { data: []}
    async getData(){
        var tempRows = []
        var apps = 0;
        for (var i = 80; i < 87; ++i){
        await CatalogService.getLoadedAppsOn(i).then((response) => {
            apps = response.data
        })

        var curDate = new Date();
        curDate = new Date(curDate.setDate(curDate.getDate()-i)).toLocaleDateString() ;

        tempRows.push({date: curDate,
                        MDM: apps+1,
                        Loaded: apps});
    };
    this.setState({data: tempRows})
  }

  componentDidMount(){
    this.getData()
  }

    render(){
        return (
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BarChart width={520} height={300} data={this.state.data} barGap={-45} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                
                <CartesianGrid />
                <Legend/>
                <XAxis dataKey="date" />
                <YAxis />
                <Bar dataKey="Loaded" stackId="0"  fill="#F37F00" />
                <Bar dataKey="MDM" stackId="1" fill="#D62C27"  fillOpacity={0.2}/>
            </BarChart>
            </div>
        );
    }
}

