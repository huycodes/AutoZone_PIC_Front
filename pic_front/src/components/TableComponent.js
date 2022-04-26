import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductService from '../Services/ProductService';
import CatalogService from '../Services/CatalogService';
import ChartStack from './ChartStack';




export default class TableComponent extends React.Component{
  


  state = { rows: [], days: 0, prod: 0, notes: 0, apps: 0, cumProd: 0, cumNotes: 0, cumApps: 0}
  
  async getData(){


    var tempRows = []
    
    await ProductService.getLoadedAfter(7).then((response) => {
      this.setState({cumProd: response.data})
      // this.state.prod = response.data
    })
    await CatalogService.getLoadedNotesAfter(7).then((response) => {
      this.setState({cumNotes: response.data})
      // this.state.notes = response.data
    })
    await CatalogService.getLoadedAppsAfter(7).then((response) => {
      this.setState({cumApps: response.data})
      // this.state.apps = response.data
    })

    tempRows.push({date: '__CUMULATIVE__', totalProds:0, loadedProds: this.state.cumProd, totalNotes: 0, loadedNotes: this.state.cumNotes, totalApps: 0, loadedApps: this.state.cumApps})
    for (var i = 80; i < 87; ++i){
      await ProductService.getLoadedOn(i).then((response) => {
        this.setState({prod: response.data})
      })
      await CatalogService.getLoadedNotesOn(i).then((response) => {
        this.setState({notes: response.data})
      })
      await CatalogService.getLoadedAppsOn(i).then((response) => {
        this.setState({apps: response.data})
      })

      var curDate = new Date();
      curDate = new Date(curDate.setDate(curDate.getDate()-i));

      tempRows.push({date: curDate.toDateString(),
                     totalProds: 0,
                     loadedProds: this.state.prod,
                     totalNotes: 0,
                     loadedNotes: this.state.notes,
                     totalApps: 0,
                     loadedApps: this.state.apps});
  };


    this.setState({rows: tempRows})
   
    
  }

  componentDidMount(){
    this.getData()
  }

  

  render(){
    // forceUpdate()

    return (
      
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            
              <TableCell align="left"><h3>Date</h3></TableCell>
              <TableCell align="left"><h3>Total Products</h3></TableCell>
              <TableCell align="left"><h3>Loaded Products</h3></TableCell>
              <TableCell align="left"><h3>Total Notes</h3></TableCell>
              <TableCell align="left"><h3>Loaded Notes</h3></TableCell>
              <TableCell align="left"><h3>Total Applications</h3></TableCell>
              <TableCell align="left"><h3>Loaded Application</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
     

              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <h3>{row.date}</h3>
                </TableCell>
                {row.totalProds == row.loadedProds ?
                <TableCell align="left" ><div style={{color:'green'}}><h3>{row.totalProds}</h3></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}>{row.totalProds}</div></TableCell>}
                {row.totalProds == row.loadedProds ?
                <TableCell align="left" ><div style={{color:'green'}}><h3>{row.loadedProds}</h3></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}>{row.loadedProds}</div></TableCell>}
                {row.totalNotes == row.loadedNotes ?
                <TableCell align="left" ><div style={{color:'green'}}><h3>{row.totalNotes}</h3></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}>{row.totalNotes}</div></TableCell>}
                {row.totalNotes == row.loadedNotes ?
                <TableCell align="left" ><div style={{color:'green'}}><h3>{row.loadedNotes}</h3></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}>{row.loadedNotes}</div></TableCell>}
                {row.totalApps == row.loadedApps ?
                <TableCell align="left" ><div style={{color:'green'}}><h3>{row.totalApps}</h3></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}>{row.totalApps}</div></TableCell>}
                {row.totalApps == row.loadedApps ?
                <TableCell align="left" ><div style={{color:'green'}}><h3>{row.loadedApps}</h3></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}>{row.loadedApps}</div></TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
    
  
} 

// async function getData(){
//   await ProductService.getLoadedAfter(181).then((response) => {
//     prod = response.data
//   })
//   await CatalogService.getLoadedNotesOn(82).then((response) => {
//     notes = response.data
//   })
//   await CatalogService.getLoadedAppsOn(83).then((response) => {
//     apps = response.data
//   })

//   var tempRows = []

//   for (var i = 0; i < 7; ++i){
//     tempRows.push(createData('', 80, prod, 80, notes, 80, apps));
//   };

//   rows = tempRows
//   // forceUpdate()
// }





// const [ignore,forceUpdate] = React.useReducer(x => x + 1, 0)

// export default function TableComponent() {

  
// }
