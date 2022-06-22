import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';

function Search ({ setQuery, loading }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { width: 800 }
      }}
      noValidate
      autoComplete='off'
      onSubmit={handleSubmit}
    >
      <Stack spacing={2} direction='row' justifyContent='center' alignItems='center'>
        <TextField value={search} onChange={(e) => setSearch(e.target.value)} />
        <LoadingButton variant='contained' type='submit' loading={loading}>Search GitHub</LoadingButton>
      </Stack>
      {search.toLowerCase() === 'recursion' && <Typography>Did you mean <strong>Recursion</strong>?</Typography>}
    </Box>
  );
}

export default Search;
