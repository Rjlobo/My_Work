import React from 'react';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
import Home from '../Home';
import Help from '../Help';
import Portfolio from '../Portfolio';
import Header from '../header';
import Footer from '../footer';
import Error from '../Error';
import WebHelp from '../SubComponents/WebHelp';
import AppHelp from '../SubComponents/AppHelp';
import DesktopHelp from '../SubComponents/DesktopHelp';


const RouteApp = ()=>{
    return(
        <div>

        <BrowserRouter>
        <Header/>
        <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/help" component={Help} exact={true} />
        <Route  path="/portfolio" component={Portfolio} />
        <Route path="/webhelp" component={WebHelp} />
        <Route path="/apphelp" component={AppHelp} />
        <Route path="/desktophelp/:id" component={DesktopHelp} />
        <Route component={Error} />
        </Switch>
        <Footer/>
        </BrowserRouter>
        </div>
    );
}
export default RouteApp;