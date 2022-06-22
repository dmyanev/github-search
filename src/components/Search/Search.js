import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Search () {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '55ch' }
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Stack spacing={2} direction='row' justifyContent='center' alignItems='center'>
        <TextField />
        <Button variant='contained' type='submit'>Search GitHub</Button>
      </Stack>
    </Box>
  );
}

export default Search;
