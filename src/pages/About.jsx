import { Button, Card } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="About">
      <Card>
        <h2>About</h2>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Button color="success" variant="contained">
            Go to Home
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