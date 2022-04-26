import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid } from 'recharts';
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
                        y: 10,
                        x: notes});
    };


    this.setState({data: tempRows})
   
    
  }

  componentDidMount(){
    this.getData()
  }

    
    render(){
        return (
            <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <BarChart width={460} height={300} data={this.state.data} >
                
                <CartesianGrid />
                <XAxis dataKey="date" />
                <YAxis />
                <Bar dataKey="x" stackId="a" fill="#4169E1" />
                <Bar dataKey="y" stackId="a" fill="#A7C7E7" />
            </BarChart>
            </div>
        );
    }
}

