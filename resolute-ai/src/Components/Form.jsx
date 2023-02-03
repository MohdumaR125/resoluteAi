import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button,Select,MenuItem ,InputLabel,FormControl} from '@mui/material';

export default function Form() {
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
      <TextField id="filled-basic" label="First Name" variant="filled" />
      <TextField id="filled-basic" label="Middle Name" variant="filled" />
      <TextField id="filled-basic" label="Last Name" variant="filled" />
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Select Class</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={11}>11</MenuItem>
          <MenuItem value={12}>12</MenuItem>

        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Select Section</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'A'}>A</MenuItem>
          <MenuItem value={'B'}>B</MenuItem>
          <MenuItem value={'C'}>C</MenuItem>
          <MenuItem value={'D'}>D</MenuItem>
          <MenuItem value={'E'}>E</MenuItem>

        </Select>
      </FormControl>     
      <TextField id="filled-basic" label="Select Division" variant="filled" />
      <TextField id="filled-basic" label="Enter Roll Number in Digits" variant="filled" max="99" type="number" />
      <TextField id="filled-basic" label="Address Line 1" variant="filled" />
      <TextField id="filled-basic" label="Address Line 2" variant="filled" />
      <TextField id="filled-basic" label="Landmark" variant="filled" />
      <TextField id="filled-basic" label="City" variant="filled" />
      <TextField id="filled-basic" label="Pincode" variant="filled" type= "number" max="999999" />
      <Button variant="contained" size='large' color="error" sx={{height:"53px" ,m:1}}>Add Student</Button>

    </Box>
    </>
  );
}