import React from 'react';

export function Day(props){
    return(
        <div>
        <h3>Good {props.isMorning ? "Morning":"Night"}</h3>
        
        </div>
    );
}