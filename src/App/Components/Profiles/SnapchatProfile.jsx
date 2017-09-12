import React, { Component } from 'react';


import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import { NavLink } from 'react-router-dom'


import ProfilePage from '../../Pages/ProfilePage.jsx';



import './profiles.scss';



class SnapchatProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded:props.toggled
        }
        this.handleExpand = this.handleExpand.bind(this);        
        
    }

    handleExpand() {
        this.setState({ expanded: !this.state.expanded })
    }

    handleImageClick(){
        console.log("TESXT");
    }

    componentWillReceiveProps(nextProps) {
        //Check if the state of toggle switch has changed.
        //If it has then adjust the Cards.        
        let { toggled } = nextProps;
        this.setState({ expanded: toggled})

    }

    render() {
        let user = this.props.user;        
        return (

            <Card expanded={this.state.expanded} className="card" style={{borderRight:user.gender === 'M' ? '2px solid yellow' : '2px solid purple' }} onExpandChange={this.handleExpand}>
                <CardHeader className="card-header"
                    title={user.username}
                    titleStyle={{ flex: 1 }}
                    subtitle={user.headline}
                    subtitleStyle={{ paddingTop: 2, flex: 1 }}
                    avatar={<NavLink to={`/tin?${user.username}`}><Avatar src={user.imageUrl} style={{ border: user.gender === 'M' ? '2px solid aqua' : '2px solid pink' }} /></NavLink>}
                    
                    showExpandableButton={true}
                    
                />
                <div style={{'opacity':this.state.expanded ? '1' : 0, height: this.state.expanded ? '100%' : 0,
                transition:'all 0.4s ease-in-out', width:'100%'}}>
                <CardMedia
                    expandable={true}
                    overlay={<CardTitle title={user.username} subtitle={user.first_name + " " + user.last_name} />}
                >
                    <img src={user.imageUrl} alt="" />
                </CardMedia>

                <CardText className="card-info" expandable={true}>
                    <h4 className="card-info-likes">
                        {user.likes + " likes"}
                    </h4>
                    <i onClick={() => this.handleLike()} className="fa fa-heart card-info-like"></i>
                    <h4 className="card-info-tags">
                        {user.tags.map(tag => "#" + tag + " ")}
                    </h4>
                    <h6 className="card-info-time">
                        {user.time_posted + " HOURS AGO"}
                    </h6>
                </CardText>
                </div>
            </Card>


        );
    }
}

export default SnapchatProfile;