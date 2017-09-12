import React, { Component } from 'react';

//Imports for react-router

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import HOCNavbar from './Components/Navbar/HOCNavbar.jsx';

import ToggleBar from './Components/Togglebar/Togglebar.jsx';


//Import Components
import Navbar from '../App/Components/Navbar/BottomNav.jsx';
import ActionBar from './Components/Actionbar/Actionbar.jsx';



import { INSTAGRAM_TAB_ID, SNAPCHAT_TAB_ID, ALL_TAB_ID } from './constants/index';

import MainBody from './MainBody.jsx';


require('./styles/mainstyles.scss');

class App extends Component {

    constructor() {
        super(); 
        this.state = {
            toggledTab:false,
            filterDrawerOpen:false
        }
    }

    selectTab(index) {
        this.setState({
            selectedIndex: index
        })
    }

    handleDrawer(){
        this.setState({
            filterDrawerOpen:!this.state.filterDrawerOpen
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
                        <ActionBar handleOpenFilterDrawer={() => this.handleDrawer()} filterDrawState={this.state.filterDrawerOpen} />
                    </header>
                    <section className="toggle-bar">
                        <ToggleBar defaultToggled={this.state.toggledTab} handleToggle={(state) => this.handleToggle(state)}/>
                    </section>
                    <section className="main-content">
                        <aside className="side content">
                            <div className="social">Left Content</div>
                        </aside>
                        <div className="center content">
                            <MainBody toggleDraw={()=>this.handleDrawer()} draw={this.state.filterDrawerOpen} toggledState={this.state.toggledTab} />
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