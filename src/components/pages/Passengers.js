import { useEffect, useState } from 'react';
import axios from 'axios';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

import PassengerCard from '../PassengerCard';
import Pagination from '../Pagination';

const Passengers = () => {
  const [passengers, setPassengers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState(0);

  const getPassengers = async () => {
    try {
      const response = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${pagination}&size=${
          pagination + 8
        }`
      );
      const { data } = response;
      setPassengers(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPassengers();
  }, [pagination]);

  const cardData = isLoading ? (
    <div>Loading Passengers Data...</div>
  ) : (
    passengers.data.map((passenger) => (
      <Col sm='3' className={'mt-3'} key={passenger._id}>
        <PassengerCard passenger={passenger} />
      </Col>
    ))
  );

  // console.log(passengers);
  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Passengers!</h1>
          <p className='lead'>Getting Passengers data using axios</p>
          <p className='lead'>
            Total Passengers{' '}
            {isLoading ? 'Loading..' : `${passengers.totalPassengers}`}
          </p>
        </Container>
      </Jumbotron>

      <Container fluid className={'mt-5'}>
        <Row>{cardData}</Row>
      </Container>
      <Container fluid className={'mt-5 mb-5'}>
        <Pagination pagination={pagination} setPagination={setPagination} />
      </Container>
    </>
  );
};

export default Passengers;
