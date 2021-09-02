import { useState, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const CreateAirlineModal = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [airlineData, setAirlineData] = useState({});

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
    if (formData) {
      history.replace('/airlines', 'post successfully added');
    }
  };

  console.log(airlineData);
  return (
    <>
      <Button onClick={toggle}>Create</Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Airline</ModalHeader>
        <ModalBody>
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
        </ModalBody>
      </Modal>
    </>
  );
};

export default CreateAirlineModal;
