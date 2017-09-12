import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import CheckBoxGroup from '../Components/CheckboxGroups/CheckboxGroup.jsx';

import { setActiveTab } from '../actions/navbar'
import { connect } from 'react-redux';

class ProfilePage extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        let query = this.props.location.search;
        this.username = query.substring(1, query.length);

        
    }
    componentDidMount() {
        this.props.setActiveTab(-300);
    }

    

    handleBack(){
        this.props.history.goBack();
    }

    render() {
        
        return (
            <div>
                <FloatingActionButton mini={true} onClick={()=>this.handleBack()}>
                    <ContentAdd />
                </FloatingActionButton>
                <h4>WELCOME {this.username}</h4>
               
                

            </div>
        );
    }
}

export default connect(null, {setActiveTab})(ProfilePage);