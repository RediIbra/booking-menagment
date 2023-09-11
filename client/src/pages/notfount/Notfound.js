import React from "react";
import { Link } from "react-router-dom";
import { Container, Heading, Text, LinkHome } from "./Notfound.style";
function Notfound() {
  return (
    <Container>
      <Heading>Oops! Page not found</Heading>
      <Text>
        The page you are looking for might have been removed, had it's name
        changed, or is temporarily unavailable.
      </Text>
      <Link to="/">
        <LinkHome href="/"> Go back to home</LinkHome>
      </Link>
    </Container>
  );
}

export default Notfound;
