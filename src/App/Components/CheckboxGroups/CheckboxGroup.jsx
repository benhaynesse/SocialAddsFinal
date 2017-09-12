import React, { Component } from 'react';
import { connect } from 'react-redux';



import Checkbox from './Checkbox.jsx';

import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class CheckboxGroup extends Component {
   

    handleCheck(label, checked) {              
        this.props.handleCheck(label,checked)      
    }
    render() {

        let props = this.props;        
        
        return (

            <List className="lll" style={{width:'90%'}}>
                <ListItem
                    primaryText={props.label}
                />
                {props.boxes.map((box,index) => {
                    let { label, color } = box;                    
                    let cb = <Checkbox checked={box.state}  label={label} color={color} onCheck={(state) => this.handleCheck(label, state)} />
                    return <ListItem key={index} leftAvatar={cb} />
                })}
            </List>


        );
    }
}

export default CheckboxGroup;