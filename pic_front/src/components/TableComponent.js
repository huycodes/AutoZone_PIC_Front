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
  
  state = { data: []}
  
  async getData(){


    var tempData = []
    var numProd = 0
    var numNotes = 0
    var numApps = 0
    
    await ProductService.getLoadedAfter(7).then((response) => {
      numProd = response.data
      // this.state.prod = response.data
    })
    await CatalogService.getLoadedNotesAfter(7).then((response) => {
      numNotes = response.data
      // this.state.notes = response.data
    })
    await CatalogService.getLoadedAppsAfter(7).then((response) => {
      numApps = response.data
      // this.state.apps = response.data
    })

    tempData.push({date: 'CUMULATIVE', totalProds:0, loadedProds: numProd, totalNotes: 0, loadedNotes: numNotes, totalApps: 0, loadedApps: numApps})
    for (var i = 80; i < 87; ++i){
      await ProductService.getLoadedOn(i).then((response) => {
        numProd = response.data
      })
      await CatalogService.getLoadedNotesOn(i).then((response) => {
        numNotes = response.data
      })
      await CatalogService.getLoadedAppsOn(i).then((response) => {
        numApps = response.data
      })

      var curDate = new Date();
      curDate = new Date(curDate.setDate(curDate.getDate()-i));

      tempData.push({date: curDate.toDateString(),
                     totalProds: 0,
                     loadedProds: numProd,
                     totalNotes: 0,
                     loadedNotes: numNotes,
                     totalApps: 0,
                     loadedApps: numApps});
  };

    this.setState({data: tempData})
       
  }

  componentDidMount(){
    this.getData()
  }

  render(){
    // forceUpdate()

    return (
      
      <TableContainer component={Paper} >
        <Table sx={{ minWidth: 150 }} aria-label="simple table" stickyHeader size='small'>
          <TableHead>
            <TableRow 
                sx={{ }}>
            
              <TableCell align="left" ><h3 style={{color:'#F37F00'}}></h3></TableCell>
              <TableCell align="center"><h3 style={{color:'#F37F00'}}>Total Products</h3></TableCell>
              <TableCell align="center"><h3 style={{color:'#F37F00'}}>Loaded Products</h3></TableCell>
              <TableCell align="center"><h3 style={{color:'#F37F00'}}>Total Notes</h3></TableCell>
              <TableCell align="center"><h3 style={{color:'#F37F00'}}>Loaded Notes</h3></TableCell>
              <TableCell align="center"><h3 style={{color:'#F37F00'}}>Total Applications</h3></TableCell>
              <TableCell align="center"><h3 style={{color:'#F37F00'}}>Loaded Applications</h3></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.data.map((row) => (
     

              <TableRow
                key={row.date}
                sx={{  }}
              >
                <TableCell component="th" scope="row">
                  <h3 style={{color:'#F37F00'}}>{row.date}</h3>
                </TableCell>
                {row.totalProds == row.loadedProds ?
                <TableCell align="center" ><div style={{color:'#FFCC80'}}><h2>{row.totalProds}</h2></div></TableCell>
                : <TableCell align="center" ><div style={{color:'#D62C27'}}><h2>{row.totalProds}</h2></div></TableCell>}
                {row.totalProds == row.loadedProds ?
                <TableCell align="center" ><div style={{color:'#FFCC80'}}><h2>{row.loadedProds}</h2></div></TableCell>
                : <TableCell align="center" ><div style={{color:'#D62C27'}}><h2>{row.loadedProds}</h2></div></TableCell>}
                {row.totalNotes == row.loadedNotes ?
                <TableCell align="center" ><div style={{color:'#FFCC80'}}><h2>{row.totalNotes}</h2></div></TableCell>
                : <TableCell align="center" ><div style={{color:'#D62C27'}}><h2>{row.totalNotes}</h2></div></TableCell>}
                {row.totalNotes == row.loadedNotes ?
                <TableCell align="center" ><div style={{color:'#FFCC80'}}><h2>{row.loadedNotes}</h2></div></TableCell>
                : <TableCell align="center" ><div style={{color:'#D62C27'}}><h2>{row.loadedNotes}</h2></div></TableCell>}
                {row.totalApps == row.loadedApps ?
                <TableCell align="center" ><div style={{color:'#FFCC80'}}><h2>{row.totalApps}</h2></div></TableCell>
                : <TableCell align="center" ><div style={{color:'#D62C27'}}><h2>{row.totalApps}</h2></div></TableCell>}
                {row.totalApps == row.loadedApps ?
                <TableCell align="center" ><div style={{color:'#FFCC80'}}><h2>{row.loadedApps}</h2></div></TableCell>
                : <TableCell align="center" ><div style={{color:'#D62C27'}}><h2>{row.loadedApps}</h2></div></TableCell>}
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
