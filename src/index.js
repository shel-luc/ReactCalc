import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import './Input.css';
import './style.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import EqualButton from './components/EqualButton';
import ZeroButton from './components/ZeroButton';



class App extends React.Component{
  
constructor(props){
  super(props);

  this.state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: ""
  };
}
addToInput = val =>{
 this.setState({input: this.state.input + val})
}
addDecimal = val => {
  if(this.state.input.indexOf(".") === -1){
    this.setState({input: this.state.input + val})
  }

}
addZeroToInput = val =>{
  if(this.state.input !== ""){
    this.setState({input:this.state.input + val})
  }
}
add =()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "plus"
}
devide =()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "devide"
}
multiply =()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "multiply"
}
subtract =()=>{
  this.state.previousNumber = this.state.input;
  this.setState({input: ""});
  this.state.operator = "subtract"
}
evaluate =()=>{
  this.state.currentNumber = this.state.input;
  
  if(this.state.operator === "plus"){
    this.setState({
      input: parseInt(this.state.previousNumber) + 
      parseInt(this.state.currentNumber)
    })
  }
  else if(this.state.operator === "devide"){
    this.setState({
      input: parseInt(this.state.previousNumber) / 
      parseInt(this.state.currentNumber)
    })
  }
  else if(this.state.operator === "multiply"){
    this.setState({
      input: parseInt(this.state.previousNumber)* 
      parseInt(this.state.currentNumber)
    })
  }
else if(this.state.operator === "subtract"){
  this.setState({
    input: parseInt(this.state.previousNumber) - 
    parseInt(this.state.currentNumber)
  })
}
}
ClearInput=()=>{
  this.setState({input: ""})
}

  render(){
    return(
  
      <div className="App">
        <div className="calc-wrapper">
        <div className="row">
       <Input>{this.state.input}</Input>
        </div>
          <div className="row">
          <ClearButton class="btn-clear" id="clear" value="AC" handleClear={this.ClearInput}>AC</ClearButton>
          <Button id="divide" value="/" handleClick={this.devide}>/</Button>
          <Button id="multiply" value="*" handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button id="eight" value="8" handleClick={this.addToInput}>8</Button>
            <Button id="nine" value="9" handleClick={this.addToInput}>9</Button>
            <Button id="subtract" value="‑" handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <Button id="four" value="4" handleClick={this.addToInput}>4</Button>
            <Button id="five" value="5" handleClick={this.addToInput}>5</Button>
            <Button id="six" value="6" handleClick={this.addToInput}>6</Button>
            <Button id="add" value="+" handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button id="one" value="1" handleClick={this.addToInput}>1</Button>
            <Button id="two" value="2" handleClick={this.addToInput}>2</Button>
            <Button id="three" value="3" handleClick={this.addToInput}>3</Button>
          </div>
          <div className="row">
          <ZeroButton id="zero" value="0" handleClick={this.addZeroToInput}>0</ZeroButton>
          <Button id="decimal" value="." handleClick={this.addDecimal}>.</Button>
          <EqualButton id="equals" value="=" handleClick={this.evaluate}>=</EqualButton>
          </div>
        </div>
       
      </div>
      
      
      
    )
  }
}



ReactDOM.render(<App /> , document.getElementById('root'));


