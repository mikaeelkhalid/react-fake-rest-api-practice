import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Logout = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Logout!</h1>
          {/* <p className='lead'>...</p> */}
        </Container>
      </Jumbotron>
    </>
  );
};

export default Logout;
