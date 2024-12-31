'use client';

import { Grid, Container } from '@mui/material';
import Card from './Card'; 

const CardList = ({ items, type }) => {
  return (
    <Container sx={{ padding: 4 }}>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
            <Card item={item} type={type} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CardList;


