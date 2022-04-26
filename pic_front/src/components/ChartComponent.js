import React from 'react';
import { BarChart, Bar, XAxis, YAxis, 
    CartesianGrid } from 'recharts';
import ProductService from '../Services/ProductService';
import CatalogService from '../Services/CatalogService';
  
const ChartComponent = (numDate, type) => {
  
    

    // Sample data
    const data = [
        // { name: 'Today', x: 12, y: 23, z: 122 },
        // { name: 'B', x: 22, y: 3, z: 73 },
        // { name: 'C', x: 13, y: 15, z: 32 },
        // { name: 'D', x: 44, y: 35, z: 23 },
        // { name: 'E', x: 35, y: 45, z: 20 },
        // { name: 'F', x: 62, y: 25, z: 29 },
        // { name: 'Today', x: 37, y: 17, z: 61 },
        // { name: 'H', x: 28, y: 32, z: 45 },
        // { name: 'I', x: 19, y: 43, z: 93 },
        
    ];
    var currentProd
    var currentNotes
    var currentApps

    for (var i = 7; i > 0; --i) {
        var curDate = new Date();
        curDate = new Date(curDate.setDate(curDate.getDate()-i)).toLocaleDateString() ;
        if (i == 1) curDate = 'Today';
        ProductService.getLoadedOn(85).then((response) => {
            currentProd = response.data
        })
        // await CatalogService.getLoadedNotesOn(i).then((response) => {
        //     currentNotes = response.data
        // })
        // await CatalogService.getLoadedAppsOn(i).then((response) => {
        //     currentApps = response.data
        // })
        data.push({name: curDate, x : 100, y: currentProd})

    }
    for (var i = 0; i < numDate; ++i){
        data.push();
    }
  
    return (
        <div style = {{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <BarChart width={520} height={300} data={data} >
            
            <CartesianGrid />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="x" stackId="a" fill="#4169E1" />
            <Bar dataKey="y" stackId="a" fill="#A7C7E7" />
        </BarChart>
        </div>
    );
}
  
export default ChartComponent;