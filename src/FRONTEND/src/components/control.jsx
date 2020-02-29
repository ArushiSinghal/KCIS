import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './control.css';
import axios from 'axios'


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


class Control extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: "off",
            tempvalue:20
        };
        this.onSubmit=this.onSubmit.bind(this)
        this.setTemp=this.setTemp.bind(this)

    }
    setTemp=(event,value)=>{this.setState({tempvalue:value})}
    setOn = (event) => {
        this.setState({ isOn: event.target.value });
    }
    onSubmit(e)
    {
    
    if(this.state.isOn=="on"){
    axios.get('http://localhost:5000/control/on')
     .then(res=>
        console.log('hello'))
    var temp=this.state.tempvalue
    console.log(temp)
    axios.post('http://localhost:5000/control/change',{temp})
    .then(res=>
        console.log('HELLO FRIENDS'))
    }
    else if(this.state.isOn=="off"){
        axios.get('http://localhost:5000/control/off')
            .then(res=>
                console.log('hello')
                )
        }

    }
    
    render() {

        if (this.state.isOn == "on") {
        
            tempSlider = 
            <div>
                <InputLabel>Temperature</InputLabel>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} min={16} max={30} onChange={this.setTemp} />
            </div>
        } else {
            tempSlider = <></>
        }

        return (
            <div>
                <h2 class="h2">Control AC</h2>
                <br></br>
                <form class="form">
                    <InputLabel>AC</InputLabel>
                    <Select>
                        <MenuItem value="ac1">AC 1</MenuItem>
                        <MenuItem value="ac2">AC 2</MenuItem>
                        <MenuItem value="ac3">AC 3</MenuItem>
                    </Select>
                    <br></br><br></br>

                    <InputLabel>On/Off</InputLabel>
                    <Select onChange={this.setOn} value={this.state.isOn}>
                        <MenuItem value="off">Off</MenuItem>
                        <MenuItem value="on">On</MenuItem>
                    </Select>
                    <br></br><br></br>

                    {tempSlider}

                    <Button variant="outlined" color="primary" onClick={this.onSubmit}>Set</Button>
                </form>
            </div>
        );
    }
}

export default Control;
