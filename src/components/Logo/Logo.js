import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
// import logoBlack from '../../../assets/icons/logo_black.png';
import classes from './Logo.module.css';


import React from 'react'

const Logo = () => {
    return(
        <Aux>
            <img alt="Logo" className={classes.Log} ></img>
        </Aux>
    );
}

export default Logo;