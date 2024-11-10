import React from 'react';
import { Card } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Tarjeta({ title, description, image }) {
  return (
    <Card style={{ width: '18rem' }} className="mb-3">
  <Card.Img variant="top" src={image} style={{ height: '200px', objectFit: 'cover' }} />
  <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <Card.Title>{title}</Card.Title>
    <Card.Text>{description}</Card.Text>
  </Card.Body>
</Card>

    
  );
}

export default Tarjeta;
