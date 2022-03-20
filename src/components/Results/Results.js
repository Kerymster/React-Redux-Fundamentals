import { Card, ListGroup } from "react-bootstrap";
import ResultItem from "./Result-item/ResultItem";
const Results = ({ results }) => {
  return (
    <div>
      <Card className="mt-5">
        <Card.Header as="h5" className="bg-dark text-white">
          Results
        </Card.Header>
        <ListGroup variant="flush">
          <ResultItem results={results} />
        </ListGroup>
      </Card>
    </div>
  );
};

export default Results;
