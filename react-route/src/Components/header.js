import React from 'react';
import {NavLink} from 'react-router-dom';

const divstyle = {
    width: '100%',
    fontWeight:'bold',
    fontSize:'30px',
    color:'red',
    backgroundColor:'green'
}
const Header = () =>{
    return(
        <div >
        <div style={divstyle}>
        <h1>React Router</h1>
        </div>
        <NavLink  to="/" activeClassName="active">Home </NavLink>
        <NavLink to="/portfolio" activeClassName="active">Portfolio </NavLink>
        <NavLink to ="/help" activeClassName="active">Help</NavLink>
       
        </div>
    );
}
export default Header;