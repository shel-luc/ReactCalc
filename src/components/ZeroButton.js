import React, {Component} from 'react';

import './ZeroButton.css';
class ZeroButton extends Component{
    render(){
        return(
            <div id="zero" 
            onClick={()=>this.props.handleClick
                (this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }
}




export default ZeroButton;