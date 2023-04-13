import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleRemove = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const getImageUrl = (itemId) => {
    const item = products.find((p) => p.id === itemId);
    return item ? item.Image : "";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "0 -8px",
      }}
    >
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <Card
            key={item.id}
            style={{
              width: 200,
              height: 200,
              margin: "8px",
              position: "relative",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              transition: "0.3s",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <CardMedia
              component="img"
              height="120"
              image={getImageUrl(item.id)}
              alt={item.name}
              style={{ objectFit: "cover" }}
            />
            <CardContent style={{ paddingTop: "8px" }}>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="h2"
                style={{ fontWeight: "bold" }}
              >
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Pris: {item.price} Kr
              </Typography>
              <IconButton
                onClick={() => handleRemove(item)}
                style={{
                  position: "absolute",
                  padding: "4px",
                  bottom: 5,
                  right: 5,
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </CardContent>
          </Card>
        ))
      ) : (
        <h1>Varukorgen är tom!</h1>
      )}
    </div>
  );
}

export default Cart;