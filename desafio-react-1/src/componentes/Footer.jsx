import React from 'react'
import {Button} from 'react-bootstrap';

const Footer = (props) => {
  return (
    <div>
    <Button variant="light">{props.texto}</Button>
    
    </div>

  )
}

export default Footer