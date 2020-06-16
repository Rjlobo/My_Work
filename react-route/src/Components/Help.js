import React from 'react';
import {NavLink} from 'react-router-dom';

const Help =(props)=>{
    console.log(props)
    return(
        <div>
<NavLink to="/webhelp" activeClassName="is-active">WebHelp</NavLink>
<br></br>
<NavLink to="/apphelp" activeClassName="is-activr">AppHelp</NavLink>
<br></br>
<NavLink to="/desktophelp" activeClassName="is-activess">DesktopHelp</NavLink>
       <h1>Help</h1>

        <h3>Welcome to the Help page!</h3>
        </div>
    );
}
export default Help;