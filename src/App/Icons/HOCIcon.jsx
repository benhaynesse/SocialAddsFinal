import React from 'react';

import PropTypes from 'prop-types';

const HOCIcon = (props) => {

    let backgroundColor = props.selectedIndex === props.index ? "#7BAFE4" : "#606060";
    let width = props.width ? props.width : "30px";
    let height = width;
    let outLineColor = props.color ? props.color : "#ccc";

    return (
        <svg fill="#000000" height={height} width={width} xmlns="http://www.w3.org/2000/svg" style={{ 'fill': backgroundColor, "transition": "fill 0.8s ease" }}>
            {props.svgIcon}
        </svg>        
    );
};


HOCIcon.propTypes = {
    svgIcon: PropTypes.object.isRequired
};




export default HOCIcon;