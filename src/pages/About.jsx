import { Button, Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <Grid margin={2}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "50vh",
        }}
      >
        <h2>About Page</h2>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button
            color="success"
            variant="contained"
            sx={{ fontWeight: "bold" }}
          >
            Go to homepage
          </Button>
        </NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          vitae maxime, eum fuga culpa nam, delectus similique porro tenetur
          quod dicta nesciunt eos iusto? Sequi velit minima vel fugit beatae?
        </p>
      </Box>
    </Grid>
  );
}
