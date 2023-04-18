import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardComponent(props) {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title className="text-center fw-bold">{props.title}</Card.Title>
          <Card.Text className="text-center fs-3">{props.temp}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted d-flex justify-content-center">
            Last updated 1 mins ago
          </small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default CardComponent;
