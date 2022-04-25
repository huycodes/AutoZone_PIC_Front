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
  
  state = { rows: [], prod: 0, notes: 0, apps: 0, cumProd: 0, cumNotes: 0, cumApps: 0}
  
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

    tempRows.push({date: '__Cumulative__', totalProds:50, loadedProds: this.state.cumProd, totalNotes: 50, loadedNotes: this.state.cumNotes, totalApps: 50, loadedApps: this.state.cumApps})
    for (var i = 0; i < 7; ++i){
      await ProductService.getLoadedOn(i).then((response) => {
        this.setState({prod: response.data})
        // this.state.prod = response.data
      })
      await CatalogService.getLoadedNotesOn(i).then((response) => {
        this.setState({notes: response.data})
        // this.state.notes = response.data
      })
      await CatalogService.getLoadedAppsOn(i).then((response) => {
        this.setState({apps: response.data})
        // this.state.apps = response.data
      })

      var curDate = new Date();
      curDate = new Date(curDate.setDate(curDate.getDate()-i));

      tempRows.push({date: curDate.toDateString(),
                     totalProds: 80,
                     loadedProds: this.state.prod,
                     totalNotes: 80,
                     loadedNotes: this.state.notes,
                     totalApps: 80,
                     loadedApps: this.state.apps});
  };

    console.log(this.state)
    this.setState({rows: tempRows})
    console.log(this.state)
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
            
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Total Products</TableCell>
              <TableCell align="left">Loaded Products</TableCell>
              <TableCell align="left">Total Notes</TableCell>
              <TableCell align="left">Loaded Notes</TableCell>
              <TableCell align="left">Total Applications</TableCell>
              <TableCell align="left">Loaded Application</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
              
                <TableCell align="left">{row.totalProds}</TableCell>
                <TableCell align="left">{row.loadedProds}</TableCell>
                <TableCell align="left">{row.totalNotes}</TableCell>
                <TableCell align="left">{row.loadedNotes}</TableCell>
                <TableCell align="left">{row.totalApps}</TableCell>
                <TableCell align="left">{row.loadedApps}</TableCell>
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
