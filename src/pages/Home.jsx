import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

function Home() {
  const [products, setProducts] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      setWarningMessage(`${product.name} är redan i varukorgen!`);
      return;
    }

    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setConfirmationMessage(`${product.name} har lagts i varukorgen!`);
  };

  return (
    <div>
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
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              height="200px"
              image={product.Image}
              alt={product.name}
            />
            <CardContent style={{ flex: "1 0 auto" }}>
              <Typography gutterBottom variant="h6" component="h2">
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Pris: {product.price} Kr
              </Typography>
            </CardContent>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton onClick={() => handleAddToCart(product)}>
                <ShoppingCartIcon />
              </IconButton>
            </div>
          </Card>
        ))}
      </div>
      <Snackbar
        open={!!confirmationMessage}
        autoHideDuration={1000}
        onClose={() => setConfirmationMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
          sx={{ backgroundColor: "#388e3c" }}
          message={confirmationMessage}
        />
      </Snackbar>
      <Snackbar
        open={!!warningMessage}
        autoHideDuration={1000}
        onClose={() => setWarningMessage("")}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <SnackbarContent
          sx={{ backgroundColor: "#d32f2f" }}
          message={warningMessage}
        />
      </Snackbar>
    </div>
  );
}

export default Home;
