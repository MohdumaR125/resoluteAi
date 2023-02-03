import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {
  return (
    <>
    <Box
      component="form"
      sx={{
          '& > :not(style)': {  m:4, width: '30ch' },
        }}
        paddingLeft="250px"
        paddingTop="100px"
        noValidate
        autoComplete="off"
        >
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      
    </Box>
    </>
  );
}