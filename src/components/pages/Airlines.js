import { useEffect } from 'react';
import { Jumbotron, Container, Row, Col, Button, Alert } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getAirline } from '../../redux/reducers/airlines';
import AirlineCard from './../AirlineCard';
import { useHistory } from 'react-router-dom';

const Airlines = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAirline());
  }, [dispatch]);

  const airlines = useSelector((state) => state.airlines.airline);

  const airlinesData = airlines.length ? airlines.slice(0, 16) : [];

  const cardData = airlines.length ? (
    airlinesData.map((airline) => (
      <Col sm='3' className={'mt-3'} key={airline.id}>
        <AirlineCard airline={airline} />
      </Col>
    ))
  ) : (
    <div>Loading Passengers Data...</div>
  );

  const handleClick = () => {
    history.push('/create-airline');
  };

  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Airlines!</h1>
          <p className='lead'>
            Getting Airlines using redux/redux saga and axios
          </p>
          <p className='lead'>
            Total Airlines: {airlines.length ? airlines.length : 'Loading..'}
          </p>
          <p className='lead'>
            {props.location.state ? (
              <Alert color='success'>{props.location.state}</Alert>
            ) : (
              ''
            )}
          </p>
          <Button onClick={handleClick}> Create </Button>
        </Container>
      </Jumbotron>

      <Container fluid className={'mt-5 mb-5'}>
        <Row>{cardData}</Row>
      </Container>
    </>
  );
};

export default Airlines;
