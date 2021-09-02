import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Link } from 'react-router-dom';

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
          <Link to={'/' + props.airline.id}>
            <CardTitle tag='h5'>{props.airline.name} </CardTitle>
          </Link>
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
