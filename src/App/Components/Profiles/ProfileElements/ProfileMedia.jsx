import React from 'react';

import { CardMedia } from 'material-ui/Card';

const ProfileMedia = (props) => {
    return (
        <CardMedia className="card-media"
            style={{ visibility: props.expanded ? 'visible' : 'hidden' }}
        >
            <div className="card-details">
                <i className="fa fa-expand user-expand"></i>
                <img src={props.image} alt=""/>
                <h4 className="user-username">
                    {props.username}
                </h4>
                <h5 className="user-name">
                    {props.fullname}
                </h5>
            </div>
        </CardMedia>
    );
};

export default ProfileMedia;