import { Container } from "react-bootstrap";
import FilmList from "./FilmList";

function MyMain() {
  return (
    <Container fluid>
      <FilmList query="Harry Potter" title="Trending Now" />
      <FilmList query="Batman" title="Watch it Again" />
      <FilmList query="Star Wars" title="New Releases" />
    </Container>
  );
}

export default MyMain;
