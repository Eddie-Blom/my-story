import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  IconButton,
  Toolbar,
  Badge,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";

const TemporaryDrawer = ({ toggleTheme, currentTheme }) => {
  const [state, setState] = useState({ left: false });
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItemsCount(cartItems.length);
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState((prevState) => ({ ...prevState, [anchor]: open }));
  };

  const listItems = [
    { text: "Hem", icon: <HomeIcon />, to: "/" },
    {
      text: "Varukorg",
      icon: (
        <Badge badgeContent={cartItemsCount} color="success">
          <ShoppingCartIcon />
        </Badge>
      ),
      to: "/cart",
    },
  ];

  const renderListItem = ({ text, icon, to }) => (
    <ListItem key={text} disablePadding>
      <ListItemButton sx={{ width: "100%" }} component={NavLink} to={to}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );

  const renderList = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>{listItems.map(renderListItem)}</List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <h3>Car Shop</h3>
          <Drawer
            anchor="left"
            open={state.left}
            onClose={toggleDrawer("left", false)}
          >
            {renderList("left")}
          </Drawer>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit" onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <IconButton color="inherit" component={NavLink} to="/cart">
            <Badge badgeContent={cartItemsCount} color="success">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TemporaryDrawer;