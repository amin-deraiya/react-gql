import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, CircularProgress } from '@mui/material';
import moment from 'moment';
import { useCharacters } from '../hooks/useCharacters';
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';

export default function CharacterLists() {
  const { error, data, loading } = useCharacters();

  console.log({ error, loading, data });

  if (loading) {
    <Box display='flex' justifyContent='center' alignItems={'center'} sx={{ height: '100vh' }}>
      <CircularProgress />
    </Box>;
  }

  if (error)
    return (
      <Box display='flex' justifyContent='center' alignItems={'center'} sx={{ height: '100vh' }}>
        <Typography>Something went wrong</Typography>
      </Box>
    );

  return (
    <Box>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'end' }}>
        <Button variant='contained' sx={{ mr: 2 }}>
          <Link to={'/search'} style={{ color: 'white', textDecoration: 'none' }}>
            Search
          </Link>
        </Button>
      </Box>
      <Box display='flex' flexWrap='wrap' justifyContent='center' mt={3}>
        {data?.characters?.results?.map((item, i) => {
          return (
            <Card key={i} sx={{ m: 1, maxWidth: 345 }}>
              <CardHeader
                avatar={<Avatar src={item?.image} sx={{ bgcolor: red[500] }} aria-label='recipe' />}
                action={
                  <IconButton aria-label='settings'>
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                subheader={moment(item.created).format('MMMM D, YYYY')}
              />
              <CardMedia component='img' height='194' image={item?.image} alt='Paella dish' />
              <CardContent>
                <Typography variant='body2' color='text.secondary'>
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <Link to={`/${item.id}`}>
                <CardActions disableSpacing>
                  <IconButton aria-label='add to favorites'>
                    <LaunchIcon />
                  </IconButton>
                  <IconButton aria-label='share'>
                    <ShareIcon />
                  </IconButton>
                </CardActions>
              </Link>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
