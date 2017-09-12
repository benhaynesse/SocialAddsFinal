import React, { Component } from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HOCPage from './Pages/HOCPage.jsx';

//Import Out Different Pages
import AllProfiles from './Pages/AllProfiles.jsx';
import SnapchatProfiles from './Pages/SnapchatProfiles.jsx';
import InstagramProfiles from './Pages/InstagramProfiles.jsx';
import NotFoundPage from './Pages/404NotFouns.jsx';

import Profile from './Pages/ProfilePage.jsx';

import { INSTAGRAM_TAB_ID, SNAPCHAT_TAB_ID, ALL_TAB_ID } from './constants/index';


const HOCRoute = ({ component, ...rest }) => {
    
        return (
            <Route {...rest} render={routeProps => {         
                let props = {toggled:rest.toggled}   
                console.log({...rest})
                return <HOCPage {...rest} >{ React.createElement(component, props)}</HOCPage>
            }} /> 
        );
    }


class MainBody extends Component {

    constructor(props) {
        super(props);        
    }
    render() {
        let props = this.props;
        return (
            <Switch>
                <HOCRoute {...props} toggled={props.toggledState} id={ALL_TAB_ID} path="/" exact component={AllProfiles} />
                <HOCRoute {...props} toggled={props.toggledState} id={ALL_TAB_ID} path="/all" component={AllProfiles} />
                <HOCRoute {...props} toggled={props.toggledState} id={SNAPCHAT_TAB_ID} path="/snapchat" component={SnapchatProfiles} />
                <HOCRoute {...props} id={INSTAGRAM_TAB_ID} path="/instagram" component={InstagramProfiles} />
                <Route id={-20} path="/tin" component={Profile}/>
                <Route path="*" component={NotFoundPage} />
            </Switch>
        );
    }
}

export default MainBody;