import { Container } from "react-bootstrap";
import FilmList from "./FilmList";
import FilmList2 from "./NewList";
import MyFooter from "./MyFooter";

function MyMain() {
  return (
    <Container fluid>
      {/* <FilmList query="Harry Potter" title="Trending Now" />
      <FilmList query="Batman" title="Watch it Again" />
      <FilmList query="Star Wars" title="New Releases" /> */}
      <FilmList2 query="Harry Potter" title="Trending Now" />
      <FilmList2 query="Batman" title="Watch it Again" />
      <FilmList2 query="Star Wars" title="New Releases" />
      <MyFooter />
    </Container>
  );
}

export default MyMain;
