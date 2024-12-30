"use client"
import * as React from 'react';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/navigation';

const ExpandMore = styled(({ expand, ...otherProps }) => (
  <IconButton {...otherProps} />
))(({ expand }) => ({
  marginLeft: 'auto',
  transition: 'transform 150ms ease-in-out', 
  transform: expand ? 'rotate(180deg)' : 'rotate(0deg)',
}));

export default function CardItem({ data , type}) {
  const [expanded, setExpanded] = React.useState(false);
  const router = useRouter();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleCardClick = () => {

    router.push(`/${type}/${data.id}`)
  }
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleCardClick}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="data">
            {data.name}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.compony}
        subheader={`Price: ${data.city}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={data.image}
        alt={data.dataname}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {data.wallet}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>More about {data.address}:</Typography>
          <Typography >
            Enjoy this delicious dish and share it with your loved ones. Perfect for any occasion!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
} 




