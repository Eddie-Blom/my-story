import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/Products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '0 -16px',
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          style={{
            width: 300,
            margin: '8px',
          }}
        >
          <CardMedia
            component="img"
            height="200px"
            image={product.Image}
            alt={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Pris: {product.price} Kr
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;