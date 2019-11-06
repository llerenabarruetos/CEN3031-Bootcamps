import React from 'react';

const addedLocation = (props) => {
    return( <li>
        <span> 
            name: {props.children}, 
            code: {props.code}
        </span> 
    </li> ) //the delete button is placed on App.js, where it displays after the location's name and code
}

export default addedLocation;

