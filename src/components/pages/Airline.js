import { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col, Media } from 'reactstrap';
import axios from 'axios';

const Airline = (props) => {
  const id = props.match.params.airline_id;

  const [airline, setAirline] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await axios.get(
        'https://api.instantwebtools.net/v1/airlines/' + id
      );

      setAirline(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  });

  const airlineData = loading ? (
    <div className='center'>Loading...</div>
  ) : (
    <>
      <Media>
        <Media left href='#'>
          <img src={airline.logo} alt={airline.name} />
        </Media>
        <Media body>
          <br />

          <Media heading>{airline.name}</Media>
          <p>{airline.country}</p>
          <p>{airline.slogon}</p>
          <p>{airline.website}</p>
          <p>{airline.established}</p>
        </Media>
      </Media>
    </>
  );

  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Airline Detail Page!</h1>
          <p className='lead'>Reading AirLine By ID - using axios only</p>
        </Container>
      </Jumbotron>
      <Container fluid className={'mt-5 mb-5'}>
        <Row>
          <Col md={6}>{airlineData}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Airline;
