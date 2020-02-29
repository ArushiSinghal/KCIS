import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './control.css';

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];


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


class Control extends Component {
    state = {}

    render() {
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

                    <InputLabel>Temperature</InputLabel>
                    <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} min={15} max={30}/>

                    <Button variant="outlined" color="primary">Set</Button>
                </form>
            </div>
        );
    }

}

export default Control;