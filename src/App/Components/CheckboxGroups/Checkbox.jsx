import React from 'react';
import Checkbox from 'material-ui/Checkbox';

import CheckedBoxIcon from 'material-ui/svg-icons/toggle/check-box';
import CheckBoxIcon from 'material-ui/svg-icons/toggle/check-box-outline-blank';

const _Checkbox = (props) => {    
    return (
        
        <Checkbox className="cehckbo"
            checkedIcon={<CheckedBoxIcon style={{fill:props.color || '#FFF'}}/>}
            uncheckedIcon={<CheckBoxIcon style={{fill:props.color || '#FFF'}}/>}
            label = {props.label}
            style={{position:'absolute', left:16, top: 8}}
            onCheck={(e, checked) =>props.onCheck(checked)}
            checked={props.checked || false}
        />
    );
};

export default _Checkbox;