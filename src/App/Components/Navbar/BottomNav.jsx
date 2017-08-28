import React, { Component } from 'react';

import PropTypes from 'prop-types';

//Import Material UI stuff
import { BottomNavigation } from 'material-ui/BottomNavigation';


import NavItem from './NavItem.jsx';

class Navbar extends Component {

    constructor(props){
        super(props);

        

        // console.log(props)
    }

    

    render() {
      
        let items = this.props.items.map((item,index) => {
            
            
            return <NavItem key={index}
                label={item.label}
                index = {index}
                selectedIndex = {this.props.selectedIndex}
                icon = {item.icon}
                selectTab = {(index)=>this.props.selectTab(index)}

            />
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