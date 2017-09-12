import React, { Component } from 'react';

import { setActiveTab } from '../../actions/navbar'
import { connect } from 'react-redux';

import {ALL_TAB_ID } from '../../constants/index';

import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import { NavLink } from 'react-router-dom'


const RightButton = (props) => ( <FloatingActionButton onTouchTap={props.onTouchTap} mini> <ContentAdd/> </FloatingActionButton>     );


class ActionBar extends Component{

    constructor(props){
        super(props);  
        console.log("ACTInIBAR",props)
    }

    handleLeftButtonTap(){
        console.log("LEFT BUTTON PRESSED")
        this.props.handleOpenFilterDrawer();
    }

    handleRightButtonTap(){
        console.log("RIGHT BUTTON PRESSED")
    }

    handleTitleButtonTap(){
        this.props.setActiveTab(ALL_TAB_ID);
    }

    

    render(){               

        return(
            
            <AppBar className="app-bar"    
                //Style For Menu Icons
                style={{minHeight:'100%', width:'100%', height:'100%', maxHeight:'100%', overflow:'none'}}
                //App bar uses flex display so just adjusting positions
                iconStyleLeft={{flex:1, marginTop:0, marginRight:0, alignSelf:'center'}}                
                titleStyle={{flex:6, textAlign:'center', alignSelf:'center'}}                
                iconStyleRight={{flex:1, margin:0, alignSelf:'center'}}


                //Set the Title
                title={<NavLink to={'/'}><span>Logo!!</span></NavLink>}
                //Set the right icon button
                iconElementRight={<RightButton onTouchTap={() => this.handleRightButtonTap()}/>}

                //Set Click Listeners for button and Title
                onLeftIconButtonTouchTap={ () => this.handleLeftButtonTap()}                
                onTitleTouchTap={ () => this.handleTitleButtonTap()}
            />
            
        )
    }
}

export default connect(null, {setActiveTab})(ActionBar);