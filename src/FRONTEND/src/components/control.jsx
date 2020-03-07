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
            tempvalue:20,
            area:'1'
        };
        this.onSubmit=this.onSubmit.bind(this)
        this.setTemp=this.setTemp.bind(this)
        this.area=this.area.bind(this)

    }
    setTemp=(event,value)=>{this.setState({tempvalue:value})}
    setOn = (event) => {
        this.setState({ isOn: event.target.value });
    }
    area(e){
        this.setState({area:e})
    }
    onSubmit(e)
    {
    
    if(this.state.isOn=="on"){
    let info1={
        no:this.state.area
    }
    console.log(info1)
    axios.post('http://localhost:5000/control/on',info1)
     .then(res=>
        {
            console.log(this.state.tempvalue)

        })
    
    let info2={
        temp:this.state.tempvalue,
        no:this.state.area
    }
    console.log(info2)
    axios.post('http://localhost:5000/control/change',info2)
    .then(res=>
        console.log(''))
    
    }
    else if(this.state.isOn=="off"){
        let info1={
            no:this.state.area
        }
    console.log(info1)

        axios.post('http://localhost:5000/control/off',info1)
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
                    
                    <img src={require(('./lab.jpeg'))} alt="resposnive imgage with clickable areas" width="600" height="420" className="aligncenter size-full wp-image-3344" useMap="#image-map" /> 
                    <map name="image-map">
                    <area target="_blank"  alt="AC 1" title="AC 1"  coords="7,12,279,81" shape="rect" onClick={()=>this.area(1)}/>
                   
                    <area target="_blank"  alt="AC 2" title="AC 2"  coords="338,336,588,405" shape="rect" onClick={()=>this.area(2)}/>
                     </map>
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
