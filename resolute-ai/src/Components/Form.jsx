import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button,Select,MenuItem ,InputLabel,FormControl} from '@mui/material';
import { useState } from 'react';

export default function Form() {
    const initState = {
        firstName: "",
        midlleName: "",
        lastName: "",
        Class:"",
        section:"",
        rollNo:"",
        addressLine1:"",
        addressLine2:"",
        landmark:"",
        city:"",
        pincode:"",

      };
      const [data, setData] = useState(initState);

      const handleChange = (e)=>{
        e.preventDefault();
        const { name,  value } = e.target;
        setData({...data,[name]:value})
      }

      const submitForm = async() =>{
        const {
            firstName,
            midlleName,
            lastName,
            Class,
            section,
            rollNo,
            addressLine1,
            addressLine2,
            landmark,
            city,
            pincode,
          } =data;
        console.log(data)
        fetch('https://resolute-99fee-default-rtdb.firebaseio.com/students.json',
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({firstName,
                midlleName,
                lastName,
                Class,
                section,
                rollNo,
                addressLine1,
                addressLine2,
                landmark,
                city,
                pincode,})
        }).then((res)=>{
            alert("data stored")
            setData(initState)
        }).catch(err=>console.log(err))
      }

  return (
    <>
    <Box
      component="form"
      sx={{
          '& > :not(style)': {  m:4, width: '30ch' },
        }}
        paddingLeft="250px"
        paddingTop="50px"
        noValidate
        autoComplete="off"
        >
      <TextField id="filled-basic" name ="firstName" label="First Name" onChange={handleChange} variant="filled" />
      <TextField id="filled-basic" name ="middleName" label="Middle Name" variant="filled" onChange={handleChange}/>
      <TextField id="filled-basic" name ="lastName" label="Last Name" variant="filled" onChange={handleChange}/>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label" >Select Class</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          onChange={handleChange}
          name="Class"
          value=""
        >
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'5'}>5</MenuItem>
          <MenuItem value={'6'}>6</MenuItem>
          <MenuItem value={'7'}>7</MenuItem>
          <MenuItem value={'8'}>8</MenuItem>
          <MenuItem value={'9'}>9</MenuItem>
          <MenuItem value={'10'}>10</MenuItem>
          <MenuItem value={'11'}>11</MenuItem>
          <MenuItem value={'12'}>12</MenuItem>

        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Select Section</InputLabel>
        <Select
        onChange={handleChange}
        name="section"
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value=""
        >
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'D'}>D</MenuItem>
          <MenuItem value={'E'}>E</MenuItem>

        </Select>
      </FormControl>     
      <TextField id="filled-basic" name ="rollNo" label="Enter Roll Number in Digits" variant="filled" max="99" type="number" onChange={handleChange}/>
      <TextField id="filled-basic" name ="addressLine1" label="Address Line 1" variant="filled" onChange={handleChange}/>
      <TextField id="filled-basic" name ="addressLine2" label="Address Line 2" variant="filled" onChange={handleChange}/>
      <TextField id="filled-basic" name ="landmark" label="Landmark" variant="filled" onChange={handleChange}/>
      <TextField id="filled-basic" name ="city" label="City" variant="filled" />
      <TextField id="filled-basic" name ="pincode" label="Pincode" variant="filled" type= "number" max="999999" />
      <Button variant="contained" size='large' color="error" sx={{height:"53px" ,m:1}} onClick={submitForm}>Add Student</Button>

    </Box>
    </>
  );
}