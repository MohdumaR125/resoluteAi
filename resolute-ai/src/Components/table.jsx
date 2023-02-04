import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable(props) {
    const {data} =props

    const openEditModal = ()=>{

    }
    const openViewModal = ()=>{

    }
    const deleteRow = ()=>{
        
    }







  return (
    <TableContainer component={Paper} sx={{pl:"250px",pt:"200px",}}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">class</TableCell>
            <TableCell align="right">Roll Number</TableCell>
            <TableCell align="right" >View</TableCell>
            <TableCell align="right" >Edit</TableCell>
            <TableCell align="right" >Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.firstName+row.lastName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.Class+"-"+row.section}</TableCell>
              <TableCell align="right">{row.rollNo}</TableCell>
              <TableCell align="right" onClick={openViewModal}>View</TableCell>
              <TableCell align="right" onClick={openEditModal}>Edit</TableCell>
              <TableCell align="right" onClick={deleteRow}>Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}