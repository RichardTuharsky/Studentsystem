import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Paper } from '@mui/material';

export default function Student() {
    const paperStyle={padding: '50px 20px', width: 600,margin: "20px auto"}
    const[name,setName]=useState('')
    const[adress,setAdress]=useState('')
  return (

    <Container>
        <Paper elevation ={3} style={paperStyle}>
            <h1>Add Student</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Student name" variant="standard" value={name}onChange={(e)=>setName(e.target.value)}/>
      <TextField id="standard-basic" label="Student adress" variant="standard" value={adress}onChange={(e)=>setAdress(e.target.value)} />
    </Box>
    </Paper>
    </Container>
  );
}
