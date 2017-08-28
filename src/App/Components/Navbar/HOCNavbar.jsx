import React, { Component } from 'react';

import Navbar from './BottomNav.jsx';

//Imports Icons For Navbar
import InstagramIcon from '../../Icons/InstagramIcon.jsx';
import SnapchatIcon from '../../Icons/SnapchatIcon.jsx';
import AllIcon from '../../Icons/AllIcon.jsx';

import { INSTAGRAM_TAB_ID, SNAPCHAT_TAB_ID, ALL_TAB_ID } from '../../constants/index.js';



import { setActiveTab } from '../../actions/navbar.js'
import { connect } from 'react-redux';

class HOCNavbar extends Component {

    constructor(props){
        super(props);
        
        this.navItems = [
            {
                label: 'Snapchat',
                icon: <SnapchatIcon />,
                location: 'snapchat',
                id: SNAPCHAT_TAB_ID
            },
            {
                label: 'All',
                icon: <AllIcon />,
                location: 'all',
                id: ALL_TAB_ID
            }, {
                label: 'Instagram',
                icon: <InstagramIcon />,
                location: 'instagram',
                id: INSTAGRAM_TAB_ID
            }
        ]
    }

    selectTab(index){        
        this.props.setActiveTab(index);
    }

    render() {
        let props = this.props;
        return (
            <Navbar
                items={this.navItems} selectedIndex={props.selectedIndex}
                selectTab={(index) => this.selectTab(index)}>
            </Navbar>
        )
    }
}

function mapStateToProps(store) {
    return { selectedIndex: store.navbar.selectedIndex }
}

export default connect(mapStateToProps, {setActiveTab})(HOCNavbar);