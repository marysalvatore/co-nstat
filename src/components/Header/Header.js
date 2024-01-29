
import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import classes from './Header.module.css';
import first from '../../assets/icons/first.jpeg'
import second from '../../assets/icons/second.jpeg'
import third from '../../assets/icons/third.jpeg'
class Header extends React.Component{

    render(){
        return(
            <Aux>
                <header className={classes.Header}>
                    <ul>
                    <img height="70px" src={first} alt="Wallet Connect png" />
                    </ul>
                    <ul>
                    <img height="70px" src={second} alt="Wallet Connect png" />
                    </ul>

                    <ul>
                    <img height="70px" src={third} alt="Wallet Connect png" />
                    </ul>

                </header>

            </Aux>
        );
    }
}

export default Header;