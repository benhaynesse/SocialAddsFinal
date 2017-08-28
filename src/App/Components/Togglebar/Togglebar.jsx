import React from 'react';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import AlertIcon from '../../Icons/AlertIcon.jsx';


const Paperstyle = {
    boxSizing: 'border-box',
    height: 30,
    width: '100%',
    textAlign: 'center',
    display: 'inline-block',
    background: '#262228',
    boxShadow: 'rgb(63, 181, 202) 0px 1px 10px'
};

const ToggleStyle = {
    boxSizing: 'border-box',
    alignSelf: 'center',
    float: 'right',
    marginRight: 15,
    fontSize: 13,
    width: 0,
    padding: 2
}

const ToggleBar = (props) => (
    <Paper style={Paperstyle} zDepth={2}>
        <Toggle
            defaultToggled={props.defaultToggled}
            style={ToggleStyle}
            thumbStyle={{ background: 'red' }}
            trackStyle={{ background: 'black' }}
            thumbSwitchedStyle={{ 'background': '#3FB5CA' }}
            trackSwitchedStyle={{ 'background': 'gray' }}
            onToggle={(e, state) => props.handleToggle(state)}
        />
        <AlertIcon onClick={(state) => props.handleAlert(state)}
            style={{ 'float': 'right' }}
            color={'white'}
            hoverColor={'#00FFFF'} />

    </Paper>
)

export default ToggleBar;