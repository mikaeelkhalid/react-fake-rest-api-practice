import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Airlines = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Airlines!</h1>
          {/* <p className='lead'>...</p> */}
        </Container>
      </Jumbotron>
    </>
  );
};

export default Airlines;
