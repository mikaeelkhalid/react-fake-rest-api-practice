import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Home = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Welcome!</h1>
          <p className='lead'>Hi, welcome to my website.</p>
        </Container>
      </Jumbotron>
    </>
  );
};

export default Home;
