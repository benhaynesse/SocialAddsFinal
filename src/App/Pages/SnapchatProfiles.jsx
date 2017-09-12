import React, { Component } from 'react';

import SnapchatProfile from '../Components/Profiles/SnapchatProfile.jsx';

class SnapchatProfiles extends Component {

    constructor(props) {
        super(props);

        this.state = {
          "snapchats": [
              {
                "id": "1",
                "first_name": "John",
                "last_name": "Doe",
                "username": "JohnDoe324",
                "age": 22,
                "gender": "M",
                "imageUrl": "https://www.howtogeek.com/wp-content/uploads/2016/12/2selfie.jpg",
                "likes": 1,
                "tags": [
                  "Snap",
                  "Goon",
                  "add"
                ],
                "time_posted": "4",
                "headline": "You should add me",
                "likedBy": []
              },
              {
                "id": "2",
                "first_name": "Ben",
                "last_name": "Haynes",
                "username": "benjani83",
                "age": 25,
                "gender": "M",
                "imageUrl": "http://cdn2.hubspot.net/hubfs/513577/blog_post_images/Selfies_for_Facebook_Marketing.._Heres_6_Awesome_Ways_to_Use_Them-ls.png",
                "likes": 2,
                "tags": [
                  "LOL",
                  "Chicken",
                  "Cheese"
                ],
                "time_posted": "11",
                "headline": "Snap me :)",
                "likedBy": []
              },
              {
                "id": "3",
                "first_name": "Mike",
                "last_name": "Myers",
                "username": "mm1854",
                "age": 45,
                "gender": "M",
                "imageUrl": "http://i2.cdn.cnn.com/cnnnext/dam/assets/160223160809-01-selfies-0224-super-169.jpg",
                "likes": 3,
                "tags": [
                  "Boobs",
                  "Cars",
                  "Dudes"
                ],
                "time_posted": "25",
                "headline": "Snap me :)",
                "likedBy": [
                  "192.168.0.12",
                  "192.168.0.35",
                  "81.103.229.120"
                ]
              },
              {
                "id": "4",
                "first_name": "Jenna",
                "last_name": "Bitch",
                "username": "badgyal923",
                "age": 19,
                "gender": "F",
                "imageUrl": "https://www.fotkaplus.co.uk/wp-content/uploads/2016/04/carousel-profile-4.jpg",
                "likes": 4,
                "tags": [
                  "Boobs",
                  "Cars",
                  "Dudes"
                ],
                "time_posted": "4",
                "headline": "Snap me :)",
                "likedBy": []
              },
              {
                "id": "5",
                "first_name": "Dave",
                "last_name": "Doe",
                "username": "JohnDoe324",
                "age": 22,
                "gender": "M",
                "imageUrl": "https://www.howtogeek.com/wp-content/uploads/2016/12/2selfie.jpg",
                "likes": 5,
                "tags": [
                  "Snap",
                  "Goon",
                  "add"
                ],
                "time_posted": "4",
                "headline": "You should add me",
                "likedBy": []
              },
              {
                "id": "6",
                "first_name": "Tim",
                "last_name": "Haynes",
                "username": "benjani83",
                "age": 25,
                "gender": "M",
                "imageUrl": "http://cdn2.hubspot.net/hubfs/513577/blog_post_images/Selfies_for_Facebook_Marketing.._Heres_6_Awesome_Ways_to_Use_Them-ls.png",
                "likes": 6,
                "tags": [
                  "LOL",
                  "Chicken",
                  "Cheese"
                ],
                "time_posted": "11",
                "headline": "Snap me :)",
                "likedBy": []
              },
              {
                "id": "7",
                "first_name": "Gary",
                "last_name": "Myers",
                "username": "mm1854",
                "age": 45,
                "gender": "M",
                "imageUrl": "http://i2.cdn.cnn.com/cnnnext/dam/assets/160223160809-01-selfies-0224-super-169.jpg",
                "likes": 7,
                "tags": [
                  "Boobs",
                  "Cars",
                  "Dudes"
                ],
                "time_posted": "25",
                "headline": "Snap me :)",
                "likedBy": [
                  "192.168.0.12",
                  "192.168.0.35",
                  "81.103.229.120"
                ]
              },
              {
                "id": "8",
                "first_name": "Dobby",
                "last_name": "Bitch",
                "username": "badgyal923",
                "age": 19,
                "gender": "F",
                "imageUrl": "https://www.fotkaplus.co.uk/wp-content/uploads/2016/04/carousel-profile-4.jpg",
                "likes": 81,
                "tags": [
                  "Boobs",
                  "Cars",
                  "Dudes"
                ],
                "time_posted": "4",
                "headline": "Snap me :)",
                "likedBy": []
              },
              {
                "id": "9",
                "first_name": "John",
                "last_name": "Doe",
                "username": "JohnDoe324",
                "age": 22,
                "gender": "M",
                "imageUrl": "https://www.howtogeek.com/wp-content/uploads/2016/12/2selfie.jpg",
                "likes": 9,
                "tags": [
                  "Snap",
                  "Goon",
                  "add"
                ],
                "time_posted": "4",
                "headline": "You should add me",
                "likedBy": []
              },
              {
                "id": "10",
                "first_name": "Ben",
                "last_name": "Haynes",
                "username": "benjani83",
                "age": 25,
                "gender": "M",
                "imageUrl": "http://cdn2.hubspot.net/hubfs/513577/blog_post_images/Selfies_for_Facebook_Marketing.._Heres_6_Awesome_Ways_to_Use_Them-ls.png",
                "likes": 10,
                "tags": [
                  "LOL",
                  "Chicken",
                  "Cheese"
                ],
                "time_posted": "11",
                "headline": "Snap me :)",
                "likedBy": []
              },
              {
                "id": "11",
                "first_name": "Mike",
                "last_name": "Myers",
                "username": "mm1854",
                "age": 45,
                "gender": "M",
                "imageUrl": "http://i2.cdn.cnn.com/cnnnext/dam/assets/160223160809-01-selfies-0224-super-169.jpg",
                "likes": 11,
                "tags": [
                  "Boobs",
                  "Cars",
                  "Dudes"
                ],
                "time_posted": "25",
                "headline": "Snap me :)",
                "likedBy": [
                  "192.168.0.12",
                  "192.168.0.35",
                  "81.103.229.120"
                ]
              },
              {
                "id": "12",
                "first_name": "Megan",
                "last_name": "Faruar",
                "username": "mg54",
                "age": 21,
                "gender": "F",
                "imageUrl": "data:image/jpeg;base64,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",
                "likes": 110,
                "tags": [
                  "Man",
                  "Flowers",
                  "Cheeses"
                ],
                "time_posted": "1",
                "headline": "Shake it out",
                "likedBy": []
              }
            ]
      }

      
    }

    render() {
        
        return (
            <div>
                <SnapchatProfile toggled={this.props.toggled} user = {this.state.snapchats[0]}/>
                <SnapchatProfile toggled={this.props.toggled} user = {this.state.snapchats[1]}/>
                <SnapchatProfile toggled={this.props.toggled} user = {this.state.snapchats[2]}/>
                <SnapchatProfile toggled={this.props.toggled} user = {this.state.snapchats[3]}/>                
            </div>
        );
    }
}



export default SnapchatProfiles;