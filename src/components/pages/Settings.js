import { useState } from 'react';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Label,
  List,
} from 'reactstrap';

const Settings = () => {
  const [isHomeChecked, setIsHomeChecked] = useState(false);
  const [isAirlineChecked, setIsAirlineChecked] = useState(false);
  const [isPassengerChecked, setIsPassengerChecked] = useState(false);

  const onChangeHome = () => {
    setIsHomeChecked(!isHomeChecked);
    localStorage.setItem('rememberHome', !isHomeChecked);
  };

  const onChangeAirline = () => {
    setIsAirlineChecked(!isAirlineChecked);
    localStorage.setItem('rememberAirline', !isAirlineChecked);
  };

  const onChangePassenger = () => {
    setIsPassengerChecked(!isPassengerChecked);
    localStorage.setItem('rememberPassenger', !isPassengerChecked);
  };

  return (
    <>
      <Jumbotron fluid>
        <Container fluid className={'mt-5'}>
          <h1 className='display-4'>Settings!</h1>
          <p className='lead'>
            Permission checkboxe(s) which will protect route(s)
          </p>
        </Container>
      </Jumbotron>
      <Container fluid className={'mt-5 mb-5'}>
        <Row>
          <Col md={6}>
            <FormGroup check>
              <Input
                type='checkbox'
                onChange={onChangeHome}
                checked={localStorage.getItem('rememberHome') === 'true'}
                name='home'
                id='home'
              />
              <Label for='home' check>
                Home Route
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type='checkbox'
                checked={localStorage.getItem('rememberAirline') === 'true'}
                onChange={onChangeAirline}
                name='airline'
                id='airline'
              />
              <Label for='airline' check>
                Airline Route
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type='checkbox'
                checked={localStorage.getItem('rememberPassenger') === 'true'}
                onChange={onChangePassenger}
                name='passenger'
                id='passenger'
              />
              <Label for='passenger' check>
                Passenger Route
              </Label>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p className='lead mt-5'> List of Protected routes...</p>
            <List type='unstyled'>
              <ul>
                {localStorage.getItem('rememberHome') === 'true' ? (
                  <li>Home</li>
                ) : null}
                {localStorage.getItem('rememberAirline') === 'true' ? (
                  <li>Airline</li>
                ) : null}
                {localStorage.getItem('rememberPassenger') === 'true' ? (
                  <li>Passenger</li>
                ) : null}
              </ul>
            </List>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Settings;
