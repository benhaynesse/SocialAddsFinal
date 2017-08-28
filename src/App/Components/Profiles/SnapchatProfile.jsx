import React, { Component } from 'react';

import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import ProfileMedia from './ProfileElements/ProfileMedia.jsx';

import './profiles-style.scss';

class SnapchatProfile extends Component {

    constructor() {
        super();

        this.state = {            
            expanded: true
        }
    }

    render() {
        let user = this.props.info;
        const customA = <Avatar src={user.imageUrl}
            style={
                { border: user.gender === 'M' ? '2px solid aqua' : '2px solid pink' }
            } />
        return (
            <div>
                <Card className="card" expanded={this.state.expanded} style={{ 'margin': '5px' }} onExpandChange={this.handleExpand}>
                    <CardHeader className="card-header"
                        title={user.first_name}
                        subtitle={user.headline}
                        avatar={customA}
                        showExpandableButton={true}
                        style={{ 'borderBottom': this.state.expanded ? '2px solid grey' : 'none' }}
                    />
                    <div style={{
                        'opacity': this.state.expanded ? '1' : 0, height: this.state.expanded ? '100%' : 0,
                        transition: 'all 0.3s ease-in', width: '100%'
                    }}>
                        <ProfileMedia
                            expanded={this.state.expanded}
                            image={user.imageUrl}
                            username={user.username}
                            fullname={user.first_name + " " + user.last_name}                        
                        />
                        <CardText className="card-info"
                            style={{ visibility: this.state.expanded ? 'visible' : 'hidden' }}
                        >
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
            </div>
        );
    }
}

export default SnapchatProfile;