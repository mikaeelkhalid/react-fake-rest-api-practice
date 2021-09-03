import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Airlines from './components/pages/Airlines';
import Passengers from './components/pages/Passengers';
import Settings from './components/pages/Settings';
import Logout from './components/pages/Logout';
import CreateAirline from './components/CreateAirline';
import Airline from './components/pages/Airline';
import UnauthMessage from './components/UnauthMessage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/airlines' component={Airlines} />
            <Route path='/unauth-401' component={UnauthMessage} />
            <Route path='/passengers' component={Passengers} />
            <Route path='/settings' component={Settings} />
            <Route path='/logout' component={Logout} />
            <Route path='/create-airline' component={CreateAirline} />
            <Route path='/:airline_id' component={Airline} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
