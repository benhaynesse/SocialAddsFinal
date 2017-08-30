import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom'

//Import Material UI stuff
import { BottomNavigation } from 'material-ui/BottomNavigation';


import NavItem from './NavItem.jsx';

class Navbar extends Component {

    constructor(props){
        super(props);             
    }    

    render() {
      
        let items = this.props.items.map((item,index) => {            
            
            return (
            <NavLink key={"nv"+index} style={{'textAlign':'center'}} to={item.location}>
            <NavItem key={index}
                label={item.label}
                index = {item.id}
                selectedIndex = {this.props.selectedIndex}
                icon = {item.icon}
                selectTab = {(index)=>this.props.selectTab(index)}
            />
            </NavLink>)
        })

        return (
            <BottomNavigation
                style={{
                    height: '100%',
                    background: this.props.background || '#262228'
                }}
            >
                {items}
         

                
            </BottomNavigation>
        )
    }
}


Navbar.propTypes = {
    height: PropTypes.string,
    background: PropTypes.string
};

export default Navbar;