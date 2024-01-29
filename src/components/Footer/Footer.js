import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
//icons
import discord from '../../assets/icons/icons8-discord_bubble.png'
import twitter from '../../assets/icons/icons8-twitter.png';
import github from '../../assets/icons/icons8-github.png'

const Footer = () => {
  return (
          <Row style={{margin: '5em'}}>
            <Col xs={12} md={{span: 8, offset: 2}}>
              <Row>
                <Col md={4} xs={12} style={{marginTop: '1em'}}>
                <span > <img height="20" src={discord} alt="Discord img" /> <small>Discord</small></span>
                </Col>

                <Col md={4} xs={12} style={{marginTop: '1em'}}>
                <span><img height="20" src={twitter} alt="Twitter img" /> <small>Twitter</small> </span>
                </Col>

                <Col md={4} xs={12} style={{marginTop: '1em'}}>
                <span><img height="20" src={github} alt="Github img" /> <small>Github</small> </span>
                </Col>

              </Row>
            </Col>

          </Row>
  )
}

export default Footer
