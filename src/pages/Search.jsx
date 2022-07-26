import { gql, useLazyQuery } from '@apollo/client';
import { Box, Button, Card, CardContent, CircularProgress, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const GET_CHARACTER_ORIGIN = gql`
  query GetCharacterOrigin($name: String!) {
    characters(filter: { name: $name }) {
      results {
        status
        species
      }
    }
  }
`;

export default function Search() {
  const [name, setName] = useState('');
  const [getCharacterOrigin, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_ORIGIN, {
    variables: { name },
  });
  console.log({ loading, error, data, called });

  console.log(data?.characters?.results, "data.characters.results.status");

  if (loading) {
    return (
      <Box display='flex' justifyContent='center' alignItems={'center'} sx={{ height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error)
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems={'center'}
        sx={{ height: '100vh' }}
        flexDirection='column'
      >
        <Typography color='tomato' variant='h4' mb={2}>
          Something went wrong
        </Typography>
      </Box>
    );

  const card = (
    <React.Fragment>
      <CardContent>
        <Box display='flex' justifyContent='center' mt={3}>
          <Box display='flex' p={3}>
            <TextField type='text' variant='outlined' onChange={(e) => setName(e.target.value)} />
            <Button variant='outlined' sx={{ ml: 1 }} onClick={getCharacterOrigin}>
              Search
            </Button>
          </Box>
        </Box>
        {data &&
        <Box>
          <Typography variant='body1'>Status: {data?.characters?.results?.map((item) => item.status + " ")}</Typography>
          <Typography variant='body1'>Species: {data?.characters?.results?.map((item) => item.species + " ")}</Typography>
        </Box>
        }
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ maxWidth: 475, mx: 'auto', mt: 4 }}>
      <Card variant='outlined'>{card}</Card>
    </Box>
  );
}
