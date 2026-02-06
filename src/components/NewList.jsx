import { Component, useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const apiKey = "cc3aec12";
const myEndPoint = "https://www.omdbapi.com/?apikey=" + apiKey + "&s=";

const FilmList2 = (props) => {
  const [films, setFilms] = useState([]);
  const { title, query } = props;
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const fetchFilms = () => {
    const url = myEndPoint + encodeURIComponent(query);

    setLoading(true);

    fetch(url)
      .then((res) => {
        console.log(res);
        if (!res?.ok) throw new Error("Errore nella risposta");
        return res.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          //   this.setState({ films: data.Search.slice(0, 6) });
          setFilms(data.Search.slice(0, 6));
        } else {
          console.log("Nessun film trovato", query);
          setFilms([]);
          setErrors(`Nessun film trovato per ${query}`);
        }
        // rallento il setLoading per far vedere il caricamento e migliorare esperienza utente
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        setLoading(false);
        console.log("Errore nella fetch:", err);
        setErrors(err.message);
      });
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  //   render() {
  //     const { films } = this.state;
  //     const { title } = this.props;

  return (
    <>
      <h4 className="text-light mb-2 mt-3 ms-1">{title}</h4>

      {errors.length > 0 && <p className="d-flex justify-content-center my-5">{errors}</p>}

      {!loading ? (
        <Row className="g-5">
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
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="light" size="sm" className="m-1" />
          <Spinner animation="grow" variant="light" size="sm" className="m-1" />
          <Spinner animation="grow" variant="light" size="sm" className="m-1" />
        </div>
      )}
    </>
  );
};

export default FilmList2;
