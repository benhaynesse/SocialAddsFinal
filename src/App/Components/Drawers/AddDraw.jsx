import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CloseIcon from '../../Icons/CloseIcon.jsx';

import TextField from 'material-ui/TextField';

import { Tabs, Tab } from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import CheckedBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';


import { cyan700, lightGreenA400, purple400, purpleA400 } from 'material-ui/styles/colors';


import './adddraw.scss';




class AddDraw extends Component {

    constructor(props) {
        super(props);

        this.state = {
            genderValue: null,
            platformValue: null,
            ageCheck: false,
            errors:
            {
                username: false,
                headline: false,
                gender: false,
                platform: false
            }
        }

    }

    handleGenderChange(event, index, value) {
        let errors = this.state.errors;
        errors = { ...errors, gender: false };
        this.setState({ genderValue: value, errors })
    }

    handlePlatformChange(e, index, value) {
        let errors = this.state.errors;
        errors = { ...errors, platform: false };
        this.setState({ platformValue: value, errors })
    }

    handleCheck(state) {
        this.setState({ ageCheck: state })
    }

    handleSubmit() {
        let username = this.refs.txtUsername.input.value;
        let headline = this.refs.txtHeadline.input.refs.input.value;
        let gender = this.refs.txtGender.props.value;
        let platform = this.refs.txtPlatform.props.value;
        let { ageCheck } = this.state;

        let errors = { ...this.state.errors };

        if (!username) {
            errors = { ...errors, username: true };

        }

        if (!gender) {
            errors = { ...errors, gender: true };
        }

        if (!platform) {
            errors = { ...errors, platform: true };
        }

        this.setState({ errors });


        console.log(username, headline, gender, platform, ageCheck);



    }

    handleOnChange(item) {
       
        if (this.state.errors[item]) {
            let errors = this.state.errors;
            errors = { ...errors, [item]: false };
            this.setState({ errors });
        }
    }

    render() {

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

                <br />
                <br /><br />
                <h1>Add Username</h1>

                <div className="add-profile-form">

                    <div className="form-control">
                        <i className="textIcon fa fa-user-circle-o"></i>
                        <TextField
                            floatingLabelFocusStyle={{ color: cyan700 }}
                            underlineStyle={{ borderColor: cyan700 }}
                            hintText={"Add your username"}
                            errorText={this.state.errors.username ? "This field is required" : null}
                            floatingLabelText={"Username"}
                            ref="txtUsername"
                            onChange={() => this.handleOnChange('username')}
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
                            ref="txtHeadline"
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
                            value={this.state.genderValue}
                            onChange={(a, b, c) => this.handleGenderChange(a, b, c)}
                            floatingLabelText="Gender"
                            dropDownMenuProps={{ anchorOrigin: { vertical: 'bottom', horizontal: 'middle' } }}
                            underlineStyle={{ borderColor: cyan700 }}
                            listStyle={{ background: '#111' }}
                            ref="txtGender"
                            errorText={this.state.errors.gender ? "This field is required" : null}
                        >
                            <MenuItem key={1} value={'M'} primaryText={<p style={{ color: 'aqua' }}>Male</p>} />
                            <MenuItem key={2} value={'F'} primaryText={<p style={{ color: 'pink' }}>Female</p>} />
                        </SelectField>
                    </div>

                    <div className="form-control">
                        <i className="textIcon fa fa-mobile-phone"></i>
                        <SelectField
                            value={this.state.platformValue}
                            onChange={(a, b, c) => this.handlePlatformChange(a, b, c)}
                            floatingLabelText="Platform"
                            dropDownMenuProps={{ anchorOrigin: { vertical: 'bottom', horizontal: 'middle' } }}
                            underlineStyle={{ borderColor: cyan700 }}
                            listStyle={{ background: '#111' }}
                            ref="txtPlatform"
                            errorText={this.state.errors.platform ? "This field is required" : null}
                        >
                            <MenuItem key={1} value={'1'} primaryText={<p style={{ color: 'yellow' }}>Snapchat</p>} />
                            <MenuItem key={2} value={'2'} primaryText={<p style={{ color: purpleA400 }}>Instagram</p>} />
                        </SelectField>
                    </div>



                    <div className="form-control">
                        <i className="textIcon fa"></i>
                        <Checkbox
                            checkedIcon={<CheckedBoxIcon style={{ fill: lightGreenA400 }} />}
                            uncheckedIcon={<CheckBoxIcon style={{ fill: 'red' }} />}
                            label={"Are you over 18??"}
                            labelPosition="left"
                            onCheck={(e, checked) => this.handleCheck(checked)}
                            checked={this.state.ageCheck}
                            style={{ marginTop: 28, fontWeight: 'bold' }}
                        />

                    </div>


                    <div className="form-control">
                        <FlatButton style={{ margin: 15 }} onClick={() => this.handleSubmit()} backgroundColor={'#111'} labelStyle={{ color: '#70A4F2', fontWeight: 'bold' }} label="Add Profile" fullWidth={true} />
                    </div>


                </div>







            </Drawer>
        );
    }
}

export default AddDraw;