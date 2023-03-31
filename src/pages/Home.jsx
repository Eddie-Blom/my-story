import { Button, Card } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <Card>
        <h2>Home</h2>
        <NavLink to="about" style={{ textDecoration: "none" }}>
          <Button color="error" variant="contained">
            Go to about
          </Button>
        </NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          vitae maxime, eum fuga culpa nam, delectus similique porro tenetur
          quod dicta nesciunt eos iusto? Sequi velit minima vel fugit beatae?
        </p>
      </Card>
    </div>
  );
}