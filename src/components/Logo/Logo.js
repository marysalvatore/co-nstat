import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
// import logoBlack from '../../../assets/icons/logo_black.png';
import classes from './Logo.module.css';


const Logo = (props) => {
    
    return(
        <Aux>
            <img alt="Logo" className={classes.Logo} alt="Logo Here"></img>
        </Aux>
    );
}






export default Logo;