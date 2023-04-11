import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  Home as HomeIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        // backgroundColor: "transparent",
      }}
      elevation={3}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Hem"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/cart"
        label="Varukorg"
        icon={<ShoppingCartIcon />}
      />
    </BottomNavigation>
  );
}