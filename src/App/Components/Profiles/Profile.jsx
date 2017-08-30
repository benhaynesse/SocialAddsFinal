import React, { Component } from 'react';


import Avatar from 'material-ui/Avatar';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

import ProfileMedia from './ProfileComps/ProfileMedia.jsx';
import ProfileInfo from './ProfileComps/ProfileInfo.jsx';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false
        }
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleExpand() {
        this.setState({ expanded: !this.state.expanded })
    }


    render() {
        let user = this.props.info;
        return (
            <Card onExpandChange={this.handleExpand} style={{background:'rgba(204, 204, 204,0.2)', margin:'5px', borderRadius:'4px', maxWidth:'400px', margin:'auto'}}>

                <CardHeader
                    title={user.username}
                    subtitle={user.headline}
                    subtitleStyle={{paddingTop:'5px'}}
                    avatar={<Avatar src={user.imageUrl} />}
                    showExpandableButton={true}
                />
                
                
                <ProfileMedia user={user} expanded={!this.state.expanded}/>

                <ProfileInfo user={user} expanded={!this.state.expanded}/>

                
                
                


            </Card>
        );
    }
}

export default Profile;