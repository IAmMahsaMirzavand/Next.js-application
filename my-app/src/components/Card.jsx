'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { Card as MuiCard, CardContent, CardMedia, Typography, Button, Avatar, Box } from '@mui/material';

// const Image = dynamic(() => import('next/image'), { ssr: false });

const Card = ({ item, type }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${type}/${item.id}`);
  };

  return (
    <MuiCard
      onClick={handleClick}
      sx={{
        maxWidth: 345,
        height: '100%',  
        margin: '16px auto',
        boxShadow: 3,
        display: 'flex', 
        flexDirection: 'column', 
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: 6,
        },
        cursor: 'pointer',
      }}
    >
      {type === 'recipes' && item.image && (
        <CardMedia
          component="img"
          height="200"
          image={item.image}
          alt={item.title}
        />
      )}
      {type === 'users' && item.image && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Avatar
            src={item.image}
            alt={item.alt}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
      )}
      
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,  
        }}
      >
        <Typography variant="h6" component="h3" gutterBottom>
          {item.title || item.name || `${item.firstName} ${item.lastName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {item.description || item.body}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="small"
          sx={{
            marginTop: 2,
            alignSelf: 'flex-start',  
            width: 'auto', 
          }}
        >
          View Details
        </Button>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
