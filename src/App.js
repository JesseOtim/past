import "./App.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import setValidated from "react";
import validated from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./product";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
// const [validated, setValidated] = useState(false);
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  const handleSignupShow = () => setShowSignup(true);
  const handleSignupClose = () => setShowSignup(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid className="d-flex justify-content-lg-center align-items-center">
            <Navbar.Brand href="#home">
              <span
                style={{
                  color: "Orangered",
                  fontSize: "35px",
                  fontWeight: "bold",
                }}
              >
                KIU
              </span>
              <span style={{ fontSize: "34px", fontWeight: "bold" }}>
                {" "}
                Past Papers : PaperPal
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-flex align-items-center ms-auto">
                <Button
                  variant="primary"
                  className="rounded-pill me-lg-3"
                  style={{ borderRadius: "35%", fontWeight: "bold" }}
                  onClick={handleLoginShow}
                >
                  Login
                </Button>
                <Button
                  variant="success"
                  className="rounded-pill me-lg-3"
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "35%",
                    fontWeight: "bold",
                  }}
                  onClick={handleSignupShow}
                >
                  Signup
                </Button>
              </div>
            </Navbar.Collapse>
          </Container>

          <Modal show={showLogin} onHide={handleLoginClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontWeight: "bold", textAlign: "center" }}>
                Login
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Form.Group md="4" controlId="validationCustom01">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Email"
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter your Email
                    </Form.Control.Feedback>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group md="6" controlId="validationCustom03">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                      Please Enter your Password
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit"className="d-block mx-auto">
                  Submit
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* SIGNUP */}
          <Modal show={showSignup} onHide={handleSignupClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{ fontWeight: "bold", textAlign: "center" }}>
                Signup
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {" "}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} md="12" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your First name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="12" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your Last name
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="johndoe@gmail.com"
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter your Email Address
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom02">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Password"
                      defaultValue=""
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter your Password
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                {
                  <Link to="/product">
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                  </Link>
                }

                <Routes>
                  <Route path="/" exact component={<App />} />
                  <Route path="/product" component={<Product />} />
                </Routes>
              </Form>
            </Modal.Body>
          </Modal>
        </Navbar>
        <header className="App-header">
          <h1 style={{ fontSize: "85px", color: "orangered" }}>PaperPal</h1>
          <p style={{ fontSize: "35px" }}>
            "Unleash Your Academic Potential with PaperPal!"
          </p>
          <div className="circle"></div> {/* Circle */}
        </header>
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ marginTop: "100px", color: "green" }}
        >
          <h1 style={{ fontSize: "50px", fontWeight: "bolder" }}>
            Introducing your Academic friend
          </h1>
        </Container>
        <Container>
          <p
            style={{ fontSize: "25px", fontWeight: "bold", color: "orangered" }}
          >
            A helping hand at every turn
          </p>
        </Container>
        <Container
          style={{
            margin: "2px",
            // border: "2px solid red",
            height: "75vh",
            marginLeft: "8%",
            borderRadius: "10%",
          }}
        >
          <Row>
            <Col>
              <Container>
                <h1
                  style={{
                    marginTop: "10px",
                    marginBottom: "20px",
                    fontWeight: "bold",
                  }}
                >
                  2020 Past Papers
                </h1>
                <header className="HOD"></header>
              </Container>
            </Col>

            <Col>
              <Container>
                <h1
                  style={{
                    marginTop: "10px",
                    marginBottom: "20px",
                    fontWeight: "bold",
                  }}
                >
                  CHSS
                </h1>
                <header className="HODO"></header>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: "100px" }}>
          <h1 style={{ fontWeight: "bold", color: "green" }}>
            More coming your way sooner than later
          </h1>
          <h2 style={{ color: "orangered" }}>Easily accessible</h2>
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            "History repeats it's self", In this case, constantly.
          </p>
        </Container>

        {/* FOOTER starts here*/}
        <footer
          className="bg-dark text-light py-4"
          style={{ marginTop: "50px" }}
        >
          <Container
            className="text-center"
            style={{ fontSize: "18px", fontWeight: "bolder", color: "white" }}
          >
            <p>&copy; 2024 KIU Past Papers : PaperPal</p>
          </Container>
        </footer>
      </div>{" "}
    </Router>
  );
}

export default App;
