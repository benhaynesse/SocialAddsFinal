import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const RightButton = (props) => ( <FloatingActionButton onTouchTap={props.onTouchTap} mini> <ContentAdd/> </FloatingActionButton>     );


class ActionBar extends Component{

    constructor(props){
        super(props);  
    }

    handleLeftButtonTap(){
        console.log("LEFT BUTTON PRESSED")
        this.props.handleOpenFilterDrawer();
    }

    handleRightButtonTap(){
        console.log("RIGHT BUTTON PRESSED")
    }

    handleTitleButtonTap(){
        console.log("TITLE PRESSED")
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
                title={"Logo!!"}
                //Set the right icon button
                iconElementRight={<RightButton onTouchTap={() => this.handleRightButtonTap()}/>}

                //Set Click Listeners for button and Title
                onLeftIconButtonTouchTap={ () => this.handleLeftButtonTap()}                
                onTitleTouchTap={ () => this.handleTitleButtonTap()}
            />
            
        )
    }
}

export default ActionBar;