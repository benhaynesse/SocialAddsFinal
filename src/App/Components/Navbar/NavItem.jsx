import React from 'react';
import PropTypes from 'prop-types';

import {BottomNavigationItem } from 'material-ui/BottomNavigation';

import HOCIcon from '../../Icons/HOCIcon.jsx';

//Const to allow styling of the label
const TabLabel = (props) => {        
    let color = props.selectedIndex === props.index ? '#7BAFE4' : '#FFF';
    return (
        <span style={{ 'color': color, 'transition': 'all 0.8s ease' }}>{props.label}</span>
    )
}

const NavItem = (props) => {    
    
    return (
        <BottomNavigationItem
            label={<TabLabel index={props.index} label={props.label} selectedIndex={props.selectedIndex}/>}
            icon={<HOCIcon svgIcon={props.icon} selectedIndex={props.selectedIndex} index={props.index}/>}
            style={{ 'paddingTop': '3px', 'transition': 'all 2s ease'}}
            onTouchTap={() => props.selectTab(props.index)}
        />
    );
};

NavItem.propTypes = {
    index: PropTypes.number.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    icon: PropTypes.object.isRequired,
    selectTab: PropTypes.func
};

export default NavItem;