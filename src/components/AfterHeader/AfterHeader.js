import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './AfterHeader.module.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AfterHeader = (props) =>  {
    return(
        <Aux>
            <Container>
                <Row>
                    <Col md={{span:6, offset: 3}} className={classes.AfterHeader}>
                     <h1>{props.header}</h1>
                     {props.locate ? <Link to='/connect' style={{textDecoration: 'none'}}><Button style={{marginLeft: '20px', fontWeight: 'bold', marginTop: '5px', background: 'purple', border: 'none'}}><small>Set up PulseChain</small></Button>{' '}</Link> : ''}

                     {/* Wallets */}


                     {props.message}

                    </Col>
                </Row>

            </Container>

        </Aux>
    );

}

export default AfterHeader

