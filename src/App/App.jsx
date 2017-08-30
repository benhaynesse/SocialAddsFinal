import React, { Component } from 'react';

//Imports for react-router

import { Route, Switch, BrowserRouter } from 'react-router-dom';

//Import Out Different Pages
import AllProfiles from './Pages/AllProfiles.jsx';
import SnapchatProfiles from './Pages/SnapchatProfiles.jsx';
import InstagramProfiles from './Pages/InstagramProfiles.jsx';
import NotFoundPage from './Pages/404NotFouns.jsx';

import HOCPage from './Pages/HOCPage.jsx';

import HOCNavbar from './Components/Navbar/HOCNavbar.jsx';

import ToggleBar from './Components/Togglebar/Togglebar.jsx';


//Import Components
import Navbar from '../App/Components/Navbar/BottomNav.jsx';
import ActionBar from './Components/Actionbar/Actionbar.jsx';



import { INSTAGRAM_TAB_ID, SNAPCHAT_TAB_ID, ALL_TAB_ID } from './constants/index';


const HOCRoute = ({ component, ...rest }) => {

    return (
        <Route {...rest} render={routeProps => {         
            let props = {toggled:rest.toggled}   
            return <HOCPage {...rest}>{ React.createElement(component,props)}</HOCPage>
        }} />
    );
}

const MainBody = (props) => (

    <Switch>
        <HOCRoute toggled={props.toggledState} id={ALL_TAB_ID} path="/" exact component={AllProfiles} />
        <HOCRoute toggled={props.toggledState} id={ALL_TAB_ID} path="/all" exact component={AllProfiles} />
        <HOCRoute toggled={props.toggledState} id={SNAPCHAT_TAB_ID} path="/snapchat" component={SnapchatProfiles} />
        <HOCRoute id={INSTAGRAM_TAB_ID} path="/instagram" component={InstagramProfiles} />
        <Route path="*" component={NotFoundPage} />
    </Switch>


)






require('./styles/mainstyles.scss');

class App extends Component {

    constructor() {
        super(); 
        this.state = {
            toggledTab:true
        }
    }

    selectTab(index) {
        this.setState({
            selectedIndex: index
        })
    }

    handleToggle(state){
        this.setState({
            toggledTab:state
        })
    }



    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <header className="action-bar">
                        <ActionBar />
                    </header>
                    <section className="toggle-bar">
                        <ToggleBar defaultToggled={this.state.toggledTab} handleToggle={(state) => this.handleToggle(state)}/>
                    </section>
                    <section className="main-content">
                        <aside className="side content">
                            <div className="social">Left Content</div>
                        </aside>
                        <div className="center content">
                            <MainBody toggledState={this.state.toggledTab} />
                        </div>
                        <aside className="side content">Right Content</aside>
                    </section>
                    <footer className="nav-bar">
                        <HOCNavbar/> 
                    </footer>
                </div>
            </BrowserRouter>
        );
    }
};

export default App;