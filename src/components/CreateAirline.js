import { useState, useRef } from 'react';
import { Button, Jumbotron, Container, Alert, Row, Col } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const CreateAirline = (props) => {
  const [airlineData, setAirlineData] = useState({});
  const [errorMSg, setErrorMsg] = useState('');
  const history = useHistory();

  const nameInput = useRef();
  const countryInput = useRef();
  const logoInput = useRef();
  const sloganInput = useRef();
  const headQuarterInput = useRef();
  const websiteInput = useRef();
  const establishedInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredName = nameInput.current.value;
    const enteredCountry = countryInput.current.value;
    const enteredLogo = logoInput.current.value;
    const enteredSlogan = sloganInput.current.value;
    const enteredHeadQuarter = headQuarterInput.current.value;
    const enteredWebsite = websiteInput.current.value;
    const enteredEstablished = establishedInput.current.value;

    const formData = {
      id: Math.floor(Math.random() * 1000000),
      name: enteredName,
      country: enteredCountry,
      logo: enteredLogo,
      slogan: enteredSlogan,
      head_uarter: enteredHeadQuarter,
      website: enteredWebsite,
      established: enteredEstablished,
    };

    setAirlineData(formData);
    formPost();
  };

  const formPost = async () => {
    try {
      const res = await axios.post(
        'https://api.instantwebtools.net/v1/airlines',
        airlineData
      );

      res.status === 200
        ? history.push('/airlines', 'post successfully added')
        : history.push('/airlines', 'post failed');
    } catch (error) {
      setErrorMsg(error.message);
      console.log('error message', error);
    }
  };

  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Create Airline!</h1>
          <p className='lead'>
            Create AirLine - form validation (optional) - display an alert upon
            creation
          </p>
        </Container>
      </Jumbotron>
      <Container fluid className={'mt-5 mb-5'}>
        <Row>
          <Col md={6}>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  ref={nameInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='country'>Country</label>
                <input
                  type='text'
                  className='form-control'
                  id='country'
                  ref={countryInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='logo'>Logo</label>
                <input
                  type='text'
                  className='form-control'
                  id='logo'
                  ref={logoInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='slogan'>Slogan</label>
                <input
                  type='text'
                  className='form-control'
                  id='slogan'
                  ref={sloganInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='head_quaters'>Head Quaters</label>
                <input
                  type='text'
                  className='form-control'
                  id='head_quaters'
                  ref={headQuarterInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='website'>Website</label>
                <input
                  type='text'
                  className='form-control'
                  id='website'
                  ref={websiteInput}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='established'>Established</label>
                <input
                  type='number'
                  className='form-control'
                  id='established'
                  ref={establishedInput}
                />
              </div>
              <br />
              <Button color='primary'>Create</Button>
            </form>
            <br />
            {errorMSg ? (
              <Alert color='danger'>
                {'Please fill form data to submit..'}
              </Alert>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateAirline;
