import React, {Component,Fragment} from 'react';


const Options = React.forwardRef((props, ref) => (
  	props.JSX ? (<div ref={ref} >{props.JSX(props.value)}</div>) :( 

    			<div ref={ref} >
    				 {props.value} 
    			</div>)));

export default Options;