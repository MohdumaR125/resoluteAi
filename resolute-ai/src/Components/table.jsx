import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {Modal} from '@mui/material';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Form from './Form';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase-config';
import Navbar from './Navbar';


export default function BasicTable(props) {
    const {data} =props;
    const [open, setOpen] = React.useState(false);
    const [view,setView] =useState(true)
    const [edit,setEdit] =useState(true)
    const [student,setStudent] =useState({});
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openEditModal = (e)=>{
        setView(false);
        setEdit(true);
        e.preventDefault();
        
        const value=data.find((el)=>{
            return el.id===e.target.id;
        })
        console.log(value)
        setStudent(value)
        handleOpen()
    }
    const openViewModal = (e)=>{
        setEdit(false);
        setView(true);
        console.log(e.target.id)
        const value=data.find((el)=>{
            return el.id===e.target.id;
        })
        console.log(value)
        setStudent(value)
        handleOpen()

    }
    const deleteRow = (e)=>{
        let text = "Are you sure you want to delete this item";
        if (window.confirm(text) == true) {
            remove(ref(db,`/${e.target.id}`))
        }

    }







  return (
      <>
      <Navbar/>
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
              key={row.id}
             
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName +" "+ row.lastName}
              </TableCell>
              <TableCell align="right">{row.Class+"-"+row.section}</TableCell>
              <TableCell align="right">{row.rollNo}</TableCell>
              <TableCell align="right" sx={{cursor:"pointer"}}  id={row.id} onClick={openViewModal}>View</TableCell>
              <TableCell align="right" sx={{cursor:"pointer"}} id={row.id} onClick={openEditModal}>Edit</TableCell>
              <TableCell align="right" sx={{cursor:"pointer"}} id={row.id} onClick={deleteRow}>Delete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {view && <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        
        
    }}
  >
    <Box  sx={{
        display: "block",
        padding:"50px",
       margin:"auto",
       backgroundColor: "white"

      }}>
      <p><b>Name </b> -{student.firstName} {student.middleName} {student.lastName}</p><br />
      <p><b>Class</b> -{student.Class}-{student.section}</p><br />
      <p><b>RollNumber</b> -{student.rollNo}</p><br />
      <p><b>Address </b>-{student.addressLine1} {student.addressLine2}</p><br />
      <p><b>Landmark</b> -{student.landmark}</p><br />
      <p><b>City</b> -{student.city}</p><br />
      <p><b>Pincode</b> -{student.pincode}</p><br />
    </Box>
  </Modal>}
  {edit &&
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
  sx={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      
      
  }}
  >
    <Box sx={{
        display: "block",
        padding:"50px",
       margin:"auto",
       backgroundColor: "white"

      }}>

      <Form student={student}/>
    </Box>
  </Modal>}
  </>
  );
}