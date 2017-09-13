import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';

import FloatingActionButton from 'material-ui/FloatingActionButton';

import CheckBoxGroup from '../CheckboxGroups/CheckboxGroup.jsx';

import CloseIcon from '../../Icons/CloseIcon.jsx';
import FlatButton from 'material-ui/FlatButton';

class FilterDrawer extends Component {

   
    


    render() {
        
        return (
            <Drawer
                containerStyle={{marginTop:'10px', transition: 'all cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '1s', background: 'black', 'opacity': 0.91 }}
                docked={false}
                onRequestChange={this.props.toggleDraw}
                width={'20%'}
                open={this.props.drawState}
            >
                

                <FlatButton onClick={()=>this.handleUpdate()} backgroundColor={'#111'} labelStyle={{color:'#70A4F2', fontWeight:'bold'}} label="Find Users" fullWidth={true} />
                
            </Drawer>
        );
    }
}

export default FilterDrawer;