import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import "./Home.css"

class Home extends Component {
  render() {
    return (
      <Card className="card-detail" style={{ width: '24rem'}}>
        <Card.Img variant="top" src={require("../../images/NSS2.png")} />
        <Card.Body>
        <Card.Title>
        My Journey<br />
        to<br />
        Coding
        </Card.Title>
      </Card.Body>
      <Card.Img variant="bottom" src={require("../../images/hackoween.jpg")} />
      </Card>
    )
  }
}

export default Home