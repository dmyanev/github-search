import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

function Results ({ results, loading }) {
  if (results.length === 0) return;
  if (loading) return <Typography variant='h2' sx={{ textAlign: 'center' }}>Loading...</Typography>;
  return (
    <Box
      sx={{
        '& .MuiTextField-root': { width: 800 }
      }}
      justifyContent='center' alignItems='center'
    >
      <List>
        {results.map(result => {
          return (
            <ListItem key={result.id}>
              <ListItemButton component='a' href={result.html_url} target='_blank'>
                <ListItemText primary={result.full_name} secondary={result.html_url} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>);
}

export default Results;
