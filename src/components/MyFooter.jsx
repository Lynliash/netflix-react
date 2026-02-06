import { Container, Row, Col, Button } from "react-bootstrap";

const MyFooter = () => {
  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Row>
            <Col className="mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" className="text-secondary text-decoration-none">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a href="#" className="text-secondary text-decoration-none" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <Button variant="" size="sm" className="btn btn-border border-secondary footer-button rounded-1 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <div className="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default MyFooter;
