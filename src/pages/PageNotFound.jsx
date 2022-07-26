import React from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate()
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection={'column'}
      sx={{ height: '100vh' }}
    >
      <Typography variant='h2' color={'white'}>
        Page not found
      </Typography>
      <Divider />
      <Button variant='outlined' color='warning' onClick={() => navigate("/")}>
        Home
      </Button>
    </Box>
  );
}
