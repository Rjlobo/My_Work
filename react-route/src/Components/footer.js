import React from 'react';

const DivStyle ={
    position: 'fixed',
        bottom: 0,
        width: '100%',
        color:'white',
        backgroundColor:'green'
    }
const Footer = ()=>{
    return(
        <div style={DivStyle}>
        @Copyright belongs to me</div>);
}
export default Footer;