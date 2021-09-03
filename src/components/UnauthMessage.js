import { Jumbotron, Container, Alert } from 'reactstrap';

const UnauthMessage = () => {
  return (
    <Jumbotron fluid>
      <Container fluid className={'mt-5'}>
        <Alert color='danger'>401 Unauthorized To Visit This Page! </Alert>
      </Container>
    </Jumbotron>
  );
};

export default UnauthMessage;
