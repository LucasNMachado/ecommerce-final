import * as React from 'react';
import { CardActionArea, Typography, CardMedia, Card, CardContent } from '@mui/material';

const CardCollections = ({ dataPOSTERCARD }) => {
  return (
    <div key={dataPOSTERCARD.id}>
      <Card sx={{ maxHeight: 800, maxWidth: 300, marginTop: 7 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300px"
            width="400px"
            margin="auto"
            image={dataPOSTERCARD.img}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {dataPOSTERCARD.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {dataPOSTERCARD.artist}
            </Typography>
            <a href="/home">Agregar al carrito</a>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default CardCollections;
