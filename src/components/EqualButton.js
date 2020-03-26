import React, {Component} from 'react';

import './EqualButton.css';
class EqualButton extends Component{
    render(){
        return(
            <div id="equals" 
            onClick={()=>this.props.handleClick
                (this.props.children)}
            >
                {this.props.children}
            </div>
        )
    }
}




export default EqualButton;