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
        <Table sx={{ minWidth: 250 }} aria-label="simple table" stickyHeader size='small'>
          <TableHead>
            <TableRow>
            
              <TableCell align="left" ><h3 style={{color:'#3874CB'}}>Date</h3></TableCell>
              <TableCell align="left"><h3 style={{color:'#3874CB'}}>Total Products</h3></TableCell>
              <TableCell align="left"><h3 style={{color:'#3874CB'}}>Loaded Products</h3></TableCell>
              <TableCell align="left"><h3 style={{color:'#3874CB'}}>Total Notes</h3></TableCell>
              <TableCell align="left"><h3 style={{color:'#3874CB'}}>Loaded Notes</h3></TableCell>
              <TableCell align="left"><h3 style={{color:'#3874CB'}}>Total Applications</h3></TableCell>
              <TableCell align="left"><h3 style={{color:'#3874CB'}}>Loaded Applications</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
     

              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <h3 style={{color:'#3874CB'}}>{row.date}</h3>
                </TableCell>
                {row.totalProds == row.loadedProds ?
                <TableCell align="left" ><div style={{color:'#A7C7E7'}}><h2>{row.totalProds}</h2></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}><h2>{row.totalProds}</h2></div></TableCell>}
                {row.totalProds == row.loadedProds ?
                <TableCell align="left" ><div style={{color:'#A7C7E7'}}><h2>{row.loadedProds}</h2></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}><h2>{row.loadedProds}</h2></div></TableCell>}
                {row.totalNotes == row.loadedNotes ?
                <TableCell align="left" ><div style={{color:'#A7C7E7'}}><h2>{row.totalNotes}</h2></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}><h2>{row.totalNotes}</h2></div></TableCell>}
                {row.totalNotes == row.loadedNotes ?
                <TableCell align="left" ><div style={{color:'#A7C7E7'}}><h2>{row.loadedNotes}</h2></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}><h2>{row.loadedNotes}</h2></div></TableCell>}
                {row.totalApps == row.loadedApps ?
                <TableCell align="left" ><div style={{color:'#A7C7E7'}}><h2>{row.totalApps}</h2></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}><h2>{row.totalApps}</h2></div></TableCell>}
                {row.totalApps == row.loadedApps ?
                <TableCell align="left" ><div style={{color:'#A7C7E7'}}><h2>{row.loadedApps}</h2></div></TableCell>
                : <TableCell align="left" ><div style={{color:'red'}}><h2>{row.loadedApps}</h2></div></TableCell>}
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
