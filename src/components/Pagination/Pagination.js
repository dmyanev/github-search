import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Pagination ({ page, setPage, allPages, results }) {
  if (results === 0) return;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Previous</Button>
      {page} / {allPages}
      <Button disabled={page === allPages} onClick={() => setPage(p => p + 1)}>Next</Button>
    </Box>
  );
}

export default Pagination;
