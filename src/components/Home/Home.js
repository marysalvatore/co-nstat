import React from 'react';
import Header from '../Header/Header'
import {Container, Row, Col, Button, Tabs, Tab} from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import classes from './Home.module.css'
import AfterHeader from '../AfterHeader/AfterHeader';
import Footer from '../Footer/Footer';
import {Link} from "react-router-dom"

const Home = () => {
  const message = <p style={{marginTop: '1em'}}>Latest: Mainnet Live! <br /> <br />
    if you are on a mobile device, please use the mobile app's browser to access the site. <br />
    Tested working with mobile/browser Metamask, mobile/browser Trust wallet and mobile Coinbase Wallet. <br />

    <li>Your mobile app needs to support custom RPC</li>
    </p>
  return (
  <Aux>
    <Header />
    <Container>

    {/* <div className={classes.parent}> */}



    <AfterHeader header={'PulseChain'} message={message} locate={true}/>
    <div className={classes.parent}>



       <Row>
           <Col md={{span:4, offset: 4}}>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-secondary"><small>To PulseX</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-primary"><small>To Block Explorer</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-danger"><small>To Gopulse</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-success"><small>To PortalX</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-warning"><small>To Beacon Explorer</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-info"><small>To Bridge</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-primary"><small>To Claim</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-success"><small>To Stake</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-danger"><small>To Internet Money</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-warning"><small>To Pools</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-warning"><small>Liquidity</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-info"><small>Missing Funds</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-secondary"><small>Add Hex</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-primary"><small>Add PLSX</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-warning"><small>Add NFT</small></Button>{' '}</Link>

           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-warning"><small>Add INC</small></Button>{' '}</Link>
           <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px'}} variant="outline-info"><small>Add Bridged Token</small></Button>{' '}</Link>
           </Col>

         </Row>



      </div>
      <Footer />
    {/* </div> */}

      </Container>
    </Aux>
  )
}

export default Home
