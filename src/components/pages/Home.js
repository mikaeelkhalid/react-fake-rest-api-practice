import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const history = useHistory();
  return (
    <>
      {localStorage.getItem('rememberHome') === 'true'
        ? history.push('/unauth-401')
        : null}
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
