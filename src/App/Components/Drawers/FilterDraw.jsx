import React, { Component } from 'react';

import Drawer from 'material-ui/Drawer';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import CloseIcon from '../../Icons/CloseIcon.jsx';

import CheckBoxGroup from '../CheckboxGroups/CheckboxGroup.jsx';


import FlatButton from 'material-ui/FlatButton';

class FilterDrawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boxGroups: [
                {
                    title: 'Gender',
                    boxes: [
                        { label: "Male", color: 'aqua', state: true },
                        { label: "Female", color: 'pink', state: true }
                    ]
                },
                {
                    title: 'Social',
                    boxes: [
                        { label: "Snapchat", color: 'yellow', state: true },
                        { label: "Instagram", color: 'purple', state: true }
                    ]

                }

            ]

        }
    }

    handleCheck(item, checked) {

        let newState = this.state.boxGroups.map(group => {
            return {
                title: group.title, boxes: group.boxes.map(box => {
                    if (box['label'] === item) {
                        return { ...box, state: checked }
                    } else {
                        return box;
                    }
                })
            }
        })

        this.setState({ boxGroups: newState })
        
    }

    handleUpdate() {
        let options = this.state.boxGroups;

        let result = options.map(item => {
            let title = item['title']
            return {
                [title]: item['boxes'].filter(element => {
                    return element['state']
                }).map(i => {
                    return i['label']
                })
            }
        })

        let e = Object.keys(result[0]);
        let newResult = result.filter(i => {
            let k = Object.keys(i);
            return i[k].length > 0;
        })

        let selectedBoxes = newResult.reduce((a, b, c) => {
            return Object.assign({}, a, b);
        })

        console.log(selectedBoxes);
    }

    


    render() {
        const filters = this.state.boxGroups.map((group, i) => {
            return <CheckBoxGroup key={i} label={group.title} boxes={group.boxes} handleCheck={(label, checked) => this.handleCheck(label, checked)} />
        })
        return (
            <Drawer
                containerStyle={{marginTop:'10px', transition: 'all cubic-bezier(0.23, 1, 0.32, 1)', transitionDuration: '1s', background: 'black', 'opacity': 0.91 }}
                docked={false}
                onRequestChange={this.props.toggleDraw}
                width={'20%'}
                open={this.props.drawState}
            >
                <FloatingActionButton mini style={{ 'float': 'right' }} onTouchTap={this.props.toggleDraw}>
                    <CloseIcon color='white'/>
                </FloatingActionButton>

                {filters}

                <FlatButton onClick={()=>this.handleUpdate()} backgroundColor={'#111'} labelStyle={{color:'#70A4F2', fontWeight:'bold'}} label="Find Users" fullWidth={true} />
                
            </Drawer>
        );
    }
}

export default FilterDrawer;