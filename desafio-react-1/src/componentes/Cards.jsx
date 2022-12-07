import React from 'react'
import {Card, Button} from 'react-bootstrap';

function Cards(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imagen}/>
        <Card.Body>
          <Card.Title>{props.titulo}</Card.Title>
          <Card.Text>
            {props.descripcion}
          </Card.Text>
          <Button variant="secondary">Saber más</Button>
        </Card.Body>
      </Card>

    </div>

  )
}

export default Cards