import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const AirlineCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width='100%'
          height='100%'
          src={props.airline.logo}
          alt={props.airline.name}
        />
        <CardBody>
          <CardTitle tag='h5'>{props.airline.name} </CardTitle>
          <CardSubtitle tag='h6' className='mb-2 text-muted'>
            Slogan: {props.airline.slogan}
            <br />
            Country: {props.airline.country}
            <br />
            Website: {props.airline.website}
            <br />
            Established: {props.airline.established}
            <br />
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default AirlineCard;
