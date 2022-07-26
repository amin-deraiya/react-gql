import * as React from 'react';
import { Box, CircularProgress, Divider, Typography } from '@mui/material';
import { useCharacter } from '../hooks/useCharacter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

export default function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);
  console.log({ loading });
  // console.log({ data });

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
        <Link to={'/'}>
          <Typography color='primary' variant='h6'>
            Home
          </Typography>
        </Link>
      </Box>
    );

  return data ? (
    <Card sx={{ maxWidth: 600, mx: 'auto', my: 2 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          sx={{ objectFit: 'contain' }}
          image={data?.character?.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' textAlign={'center'}>
            {data?.character?.name}
          </Typography>
          <Box display='flex' sx={{ width: '100%', mb: 1.5 }} alignItems='center' justifyContent={'space-between'}>
            <Typography variant='h6' color='text.secondary'>
              Name
            </Typography>
            <Typography variant='h6' color='text.secondary'>
              Episode
            </Typography>
          </Box>
          {data?.character?.episode?.map((item, i) => {
            return (
              <Box key={i}>
                <Divider />
                <Box
                  display='flex'
                  sx={{ width: '100%' }}
                  alignItems='center'
                  justifyContent={'space-between'}
                >
                  <Typography variant='body2' color='text.secondary'>
                    {item?.name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item?.episode}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
      </CardActions>
    </Card>
  ) : null;
}
