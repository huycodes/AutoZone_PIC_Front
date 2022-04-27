import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid, Legend } from 'recharts';
import ProductService from '../Services/ProductService';
import CatalogService from '../Services/CatalogService';
import { render } from '@testing-library/react';


export default class CatalogNoteChart extends React.Component{
    

    state = { data: []}
  
    async getData(){


        var tempRows = []
        var notes = 0;
        for (var i = 80; i < 87; ++i){
        await CatalogService.getLoadedNotesOn(i).then((response) => {
            notes = response.data
        })

        var curDate = new Date();
        curDate = new Date(curDate.setDate(curDate.getDate()-i)).toLocaleDateString() ;

        tempRows.push({date: curDate,
                        Total: notes+2,
                        Loaded: notes});
    };


    this.setState({data: tempRows})
   
    
  }

  componentDidMount(){
    this.getData()
  }

    
    render(){
        return (
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BarChart width={500} height={300} data={this.state.data} barGap={-44} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                
                <CartesianGrid />
                <Legend/>
                <XAxis dataKey="date" />
                <YAxis />
                <Bar dataKey="Loaded" stackId="0"  fill="#3874CB" />
                <Bar dataKey="Total" stackId="1" fill="#A7C7E7"  fillOpacity={0.5}/>
            </BarChart>
            </div>
        );
    }
}

