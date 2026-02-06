import { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";

const apiKey = "cc3aec12";
const myEndPoint = "https://www.omdbapi.com/?apikey=" + apiKey + "&s=";

class FilmList extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    const url = myEndPoint + encodeURIComponent(this.props.query);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella risposta");
        return res.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          this.setState({ films: data.Search.slice(0, 6) });
        } else {
          console.log("Nessun film trovato", this.props.query);
          this.setState({ films: [] });
        }
      })
      .catch((err) => console.log("Errore nella fetch:", err));
  }

  render() {
    const { films } = this.state;
    const { title } = this.props;

    return (
      <>
        <h4 className="text-light mb-1 mt-3 ms-3">{title}</h4>
        <Row className="g-0">
          {films.map((film, index) => (
            <Col key={film.imdbID + index} className="mb-2 text-center p-0" xs={6} md={4} lg={2}>
              <Image fluid src={film.Poster} alt={film.Title} style={{ height: "250px", objectFit: "fill" }} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default FilmList;
