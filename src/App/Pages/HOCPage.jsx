import React, { Component } from 'react';

import { setActiveTab } from '../actions/navbar'
import { connect } from 'react-redux';

import FilterDraw from '../Components/Drawers/FilterDraw.jsx';





class HOCPage extends Component {

    constructor(props) {
        super(props);        
    }
    componentDidMount() {
        this.props.setActiveTab(this.props.id);
    }

    render() {
        return (
            <div>
                <FilterDraw toggleDraw={this.props.toggleDraw} drawState={this.props.draw}/>
                {this.props.children}
                
            </div>
        );
    }
}

export default connect(null, { setActiveTab })(HOCPage);