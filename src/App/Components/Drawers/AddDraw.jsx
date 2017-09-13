import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CloseIcon from '../../Icons/CloseIcon.jsx';

import TextField from 'material-ui/TextField';

import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import { cyan700 } from 'material-ui/styles/colors';

import './adddraw.scss';

class AddDraw extends Component {

    constructor(props){
        super(props);

        this.state = {
            optionValue:null,
        }
    }

    handleChange(event, index, value){
        this.setState({optionValue:value})
    }


    render() {
        console.log(this.state.optionValue);
        return (
            <Drawer containerClassName="add-profile-draw"
                containerStyle={{ transition: 'all cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '1s', background: 'black', 'opacity': 0.91 }}
                docked={false}
                onRequestChange={this.props.toggleDraw}
                open={true}
                openSecondary
            >
                <FloatingActionButton mini style={{ 'float': 'left' }} onTouchTap={this.props.toggleDraw}>
                    <CloseIcon color='white' />
                </FloatingActionButton>
                <br /><br /><br />

                <div className="add-profile-form">

                    <div className="form-control">
                        <i className="textIcon fa fa-user-circle-o"></i>
                        <TextField
                            floatingLabelFocusStyle={{ color: cyan700 }}
                            underlineStyle={{ borderColor: cyan700 }}
                            hintText={"Add your username"}
                            floatingLabelText={"Username"}
                        />
                    </div>

                    <div className="form-control">
                        <i className="textIcon fa fa-newspaper-o"></i>
                        <TextField
                            hintText="Enter a small description"
                            floatingLabelText="Headline"
                            multiLine={true}
                            rows={1}
                            rowsMax={2}
                            floatingLabelFocusStyle={{ color: cyan700 }}
                            underlineStyle={{ borderColor: cyan700 }}
                            style={{ width: '100%' }}
                        />
                    </div>

                    <div className="form-control">
                        <i className="textIcon fa fa-image"></i>
                        <TextField
                            floatingLabelText="Image"
                            hintText="Add a picture of yourself"
                            floatingLabelFocusStyle={{ color: cyan700 }}
                            underlineStyle={{ borderColor: cyan700 }}
                            multiLine={true}
                            rows={1}
                            rowsMax={4}
                            style={{ width: '100%' }}
                            
                        />
                    </div>


                    <div className="form-control">
                        <i className="textIcon fa fa-venus-mars"></i>
                        <SelectField
                            value={this.state.optionValue}
                            onChange={(a,b,c)=> this.handleChange(a,b,c)}
                            floatingLabelText="Gender"
                            
                            

                            floatingLabelFocusStyle={{ color: cyan700 }}
                            underlineStyle={{ borderColor: cyan700 }}
                        >
                        <MenuItem key={1} value={'M'} primaryText="Male"/>
                        <MenuItem key={2} value={'F'} primaryText="Female"/>
                        </SelectField>
                    </div>

                   

                    





                    </div>







            </Drawer>
                );
    }
}

export default AddDraw;