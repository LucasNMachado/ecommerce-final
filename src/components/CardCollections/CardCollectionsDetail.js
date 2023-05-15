import * as React from 'react';
import { CardActionArea, Typography, CardMedia, Card, CardContent, Button  } from '@mui/material';



const CardCollectionsDetail = ({dataPOSTERCARDDETAIL}) => {
  return (
    <div key={dataPOSTERCARDDETAIL.id}>
      <Card sx={{ maxHeight: 800 , maxWidth: 300 , marginTop: 7 }} >
        <CardActionArea>
          <CardMedia height="300px" width="400px" margintop="400px" component="img" image={dataPOSTERCARDDETAIL.img} alt="" />
          <CardContent>
            <Typography gutterBottom variant="h5" fontSize="10px" component="div">
            {dataPOSTERCARDDETAIL.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {dataPOSTERCARDDETAIL.artist}
            </Typography>
            <Typography gutterBottom variant="h5" fontSize="10px" component="div">
            {dataPOSTERCARDDETAIL.info}
            </Typography>
            <Typography gutterBottom variant="h5" fontSize="10px" component="div">
            {dataPOSTERCARDDETAIL.size}
            </Typography>
            <Typography gutterBottom variant="h5" fontSize="10px" component="div">
            {dataPOSTERCARDDETAIL.price}
            </Typography>
           
          </CardContent>
         
        </CardActionArea>
        <Button>Agregar al carrito</Button> 
      </Card>
    </div>
    
  );
}

export default CardCollectionsDetail