import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Pagination from '../Pagination/Pagination';

function App () {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(1);
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    if (query === '') {
      setNoResults(false);
      setResults([]);
      setAllPages(1);
      return;
    }
    const fetchResults = async () => {
      try {
        setLoading(true);
        const result = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&page=${page}&sort=created&order=asc`,
          {
            headers: {
              accept: 'application/vnd.github.v3+json'
            }
          });
        const jsonResult = await result.json();
        console.log(jsonResult);
        if (jsonResult.total_count === 0) {
          setNoResults(true);
          setAllPages(1);
          setResults([]);
        } else {
          setNoResults(false);
          setAllPages(Math.ceil(jsonResult.total_count / 30));
          setResults(jsonResult.items || []);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [query, page]);

  return (
    <Box style={{ width: 800, margin: '20px auto' }}>
      <Search setQuery={setQuery} loading={loading} />
      {noResults && <Typography variant='h3' sx={{ textAlign: 'center' }}>No results found</Typography>}
      <Results results={results} loading={loading} />
      <Pagination page={page} setPage={setPage} allPages={allPages} results={results.length} />
    </Box>
  );
}

export default App;
