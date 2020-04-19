
import {Modal,Button} from 'react-bootstrap'
import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './control.css';
import axios from 'axios'
import './Modal.css';

import 'bootstrap/dist/css/bootstrap.min.css';


const PrettoSlider = withStyles({
  root: {
      color: '#0041C2',
      height: 5,
  },
  thumb: {
      height: 20,
      width: 20,
      backgroundColor: '#0041C2',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -5,
      '&:focus,&:hover,&$active': {
          boxShadow: 'inherit',
      },
  },
  active: {},
  valueLabel: {
      left: 'calc(-50% + 4px)',
  },
  track: {
      height: 5,
      borderRadius: 4,
  },
  rail: {
      height: 5,
      borderRadius: 4,
  },
})(Slider);

var tempSlider;




class modal extends Component {
  constructor(props){
    super(props)
    this.state={
      isOn: "off",
      tempvalue:20,
      
    };

    this.set=this.set.bind(this)
  
    
  }
  settemp=(event,value)=>{
    console.log(value)
    console.log(this.props)
    this.setState({tempvalue:value})}
    
  
  set = (event) => {
    
      this.setState({ isOn: event.target.value });
  }
  submit=(event)=>{

    if(this.state.isOn=="on"){
      let info1={
          no:this.props.ac
      }
      console.log(info1)
      axios.post('http://localhost:5000/control/on',info1)
      .then(res=>
          {
              console.log(this.state.tempvalue)

          })
      
      let info2={
          temp:this.state.tempvalue,
          no:this.props.ac
      }
      console.log(info2)
      axios.post('http://localhost:5000/control/change',info2)
      .then(res=>
          console.log(''))
      
      }
      else if(this.state.isOn=="off"){
          let info1={
              no:this.props.ac
          }
      console.log(info1)

          axios.post('http://localhost:5000/control/off',info1)
              .then(res=>
                  console.log('hello')
                  )
          }

  }
  render(){
    console.log("MY MY")
    console.log(this.props.ac)
    if (this.state.isOn == "on") {
        
      tempSlider = 
      <div>
          <InputLabel>Temperature</InputLabel>
          <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} min={16} max={30} onChange={this.settemp} />
      </div>
  } else {
      tempSlider = <><br/><br/><br/></>
  }
  if(this.props.show==false)
  {
    
    console.log("kya hua")
    return null
  }
    return (
      <div>
        <div className="modal-wrapper" style={{transform: this.props.show ? 'translateY(0vh)' : 'translateY(-100vh)',opacity: this.props.show ? '1' : '0'}}>
            <Modal.Dialog>
            <Modal.Header >
              <Modal.Title>Control AC</Modal.Title>
            </Modal.Header>
          
            <Modal.Body>
                
            <br></br>
                <InputLabel>On/Off</InputLabel>
                <Select onChange={this.set} value={this.state.isOn}>
                    <MenuItem value="off">Off</MenuItem>
                    <MenuItem value="on">On</MenuItem>
                </Select>
                

                {tempSlider}

              
          
            
                    
                      
            
                        
          
            
           
            </Modal.Body>
          
            <Modal.Footer>
              <Button variant="secondary" onClick={this.submit}>Set</Button>
              <Button variant="secondary" onClick={this.props.close}>Close</Button>
            
            </Modal.Footer>
           </Modal.Dialog>
        </div>
      </div>
    )
    
  }
}
export default modal;


