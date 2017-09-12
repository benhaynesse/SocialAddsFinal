import React, { Component } from 'react';

import { setActiveTab } from '../actions/navbar'
import { connect } from 'react-redux';

class HOCPage extends Component {

    constructor(props){
        super(props);        
        console.log(props);
    }
    componentDidMount(){
        this.props.setActiveTab(this.props.id);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(null, { setActiveTab })(HOCPage);