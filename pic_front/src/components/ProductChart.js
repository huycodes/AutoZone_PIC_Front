import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Legend } from 'recharts';
import ProductService from '../Services/ProductService';

export default class ChartComponent extends React.Component{
    state = { data: []}
  
    async getData(){
        var tempRows = []
        var prod = 0;
        for (var i = 80; i < 87; ++i){
        await ProductService.getLoadedOn(i).then((response) => {
            prod = response.data
        })

        var curDate = new Date();
        curDate = new Date(curDate.setDate(curDate.getDate()-i)).toLocaleDateString() ;

        tempRows.push({date: curDate,
                        Total: 10,
                        Loaded: prod});
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
                <Bar dataKey="Loaded" stackId="0"  fill="#3874CB" />
                <Bar dataKey="Total" stackId="1" fill="#A7C7E7"  fillOpacity={0.6}/>
            </BarChart>
            </div>
        );
    }
}

