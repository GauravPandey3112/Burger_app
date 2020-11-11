import React from 'react'
import BurgerLogo from '../../assets/images/screen-4.jpg'
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="Burper" />
    </div>
)

export default logo;