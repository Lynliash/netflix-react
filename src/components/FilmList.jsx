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
        <h4 className="text-light mb-2 mt-3 ms-1">{title}</h4>
        <Row
          className="g-5
        "
        >
          {/* Nel map, essendo che a volte uscivano duplicati e mi dava errore in console
          per risolvere sono dovuto ricorrere a chatgpt, che mi ha consigliato di aggiungere
          anche l'index alla key, in modo da avere sempre un "id" unico anche in caso di duplicati */}
          {films.map((film, index) => (
            <Col key={film.imdbID + index} className="px-2 px-md-4 px-lg-5" xs={6} md={4} lg={2}>
              {" "}
              <Image
                fluid
                src={film.Poster}
                alt={film.Title}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </Col>
          ))}
        </Row>
      </>
    );
  }
}

export default FilmList;
