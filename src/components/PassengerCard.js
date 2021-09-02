import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const PassengerCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width='100%'
          height='100%'
          src={props.passenger.airline[0].logo}
          alt={props.passenger.name}
        />
        <CardBody>
          <CardTitle tag='h5'>{props.passenger.airline[0].name} </CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            Name: {props.passenger.name}
            <br />
            Trips: {props.passenger.trips}
            <br />
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default PassengerCard;
