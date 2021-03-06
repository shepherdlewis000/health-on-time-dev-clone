import "../Styles/LandingPage.css";
import React from "react";
import { Jumbotron, Button, Card, CardDeck } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="App">
      <main>
        <img alt="hero" className="hero" src="/hero.jpg" />
        <Jumbotron className="jumbtron">
          <p>
            COVID has made it difficult to care of those we love, so we created
            APP NAME so we can hold one each other accountable on taking our
            medication
          </p>
          <p>
            <Link to="/login">
              <Button variant="primary">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary">Sign up</Button>
            </Link>
          </p>
        </Jumbotron>
        <h1>Why Choose Us ?</h1>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="/planning.jpg" />
            <Card.Body>
              <Card.Title>Stay Organized</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="/holdhands.jpg" />
            <Card.Body>
              <Card.Title>Hold one another accountable</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="/ontime.jpg" />
            <Card.Body>
              <Card.Title>Stay on time</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </main>
    </div>
  );
};

export default LandingPage;
