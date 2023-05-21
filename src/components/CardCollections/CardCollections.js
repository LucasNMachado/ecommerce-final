import React from 'react';
import { CardActionArea, Typography, CardMedia, Card, CardContent, Button } from '@mui/material';
import { PosterContext } from "../../components/Context/PosterContext";
import { Link } from "react-router-dom";

const CardCollections = ({ dataPOSTERCARD }) => {
  const { addToCart } = React.useContext(PosterContext);

  const handleBuyClick = () => {
    addToCart(dataPOSTERCARD);
  };

  return (
    <div key={dataPOSTERCARD.id}>
      <Card sx={{ maxHeight: 800, maxWidth: 300, marginTop: 7 }}>
        <Link to={`/detail/${dataPOSTERCARD.id}`} style={{ textDecoration: 'none' }}>
          <CardActionArea>
            <CardMedia
              height="300px"
              width="400px"
              margin="auto"
              component="img"
              image={dataPOSTERCARD.img}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" fontSize="10px" component="div">
                {dataPOSTERCARD.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dataPOSTERCARD.artist}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
        <Button onClick={handleBuyClick}>Buy</Button>
      </Card>
    </div>
  );
};

export default CardCollections;
