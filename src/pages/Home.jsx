import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0 -16px",
      }}
    >
      {products.map((product) => (
        <Card
          key={product.id}
          style={{
            width: 300,
            margin: "8px",
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
            <IconButton onClick={() => handleAddToCart(product)}>
              <ShoppingCartIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Home;
