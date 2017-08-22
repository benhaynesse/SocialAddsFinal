import React, { Component } from 'react';

//Import Material UI stuff
import { BottomNavigation } from 'material-ui/BottomNavigation';
import { BottomNavigationItem } from 'material-ui/BottomNavigation';



import FacebookIcon from '../../Icons/FacebookIcon.jsx';



class Navbar extends Component {

    constructor(props){
        super(props);

        this.navStyles = {
            height:'100%',
            background: props.background || '#262228'
        }
    }

    render() {
        return (
            <BottomNavigation style={this.navStyles}>

                <BottomNavigationItem
                    label={"YER"}
                    icon={<FacebookIcon />}
                    onTouchTap={() => console.log("TEST")}                    
                />
                <BottomNavigationItem
                    label={"YER"}
                    icon={<FacebookIcon />}
                    onTouchTap={() => console.log("TEST")}                    
                />
                <BottomNavigationItem
                    label={"YER"}
                    icon={<FacebookIcon />}
                    onTouchTap={() => console.log("TEST")}                    
                />


            </BottomNavigation>
        );
    }
}

export default Navbar;