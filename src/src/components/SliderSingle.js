import { Component } from "react";
import { withStyles, makeStyles, useStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import defaultOptopns from "../data/defaultOptopns.json"
import defaultData from "../data/defaultData.json" 
import chroma from "chroma-js"; 
import { Button, Checkbox, Fab, FormControlLabel, Typography } from "@material-ui/core"; 

const styles = theme => ({
    
});
class SliderSingle extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            options : props.options
                ?
                props.options
                :
                defaultOptopns.options,
            value : props.value,
            label : props.label,
            selected : props.selected
        }
    }
    componentWillUpdate(nextProps, nextState )
    {
        if(nextProps.selected != this.state.selected )
        {
            this.setState({ selected: nextProps.selected })
        }
        if(nextProps.value != this.state.value )
        {
            this.setState({ value: nextProps.value })
        }
    }
    handleSelected = evt =>
    { 
        this.on( "selected", !this.state.selected );
    }
    on = (field, value) =>
    {
        if(this.props.on)
        {
            this.props.on(field, value);
        }
    }
    render()
    {
        const {value, label, selected } = this.state;
        return <span
            className="pretto"
        >
            <span className="pretto-label">
                { value }
            </span>
            <__Slider
                key={i}
                orientation="vertical"  
                aria-label="pretto slider"
                value={ value }
                min={min}
                max={max}
                selected= { selected }
                onChange={ ( event, newValue ) => this.handleSliderChange(event, newValue, i) }
            /> 
            <div 
                className={"pretto-time flow-square" + ( selected ? " active" : "" )} 
                style={{                           
                    bottom:-(options.staff.width + 0),
                    marginLeft:7,
                    width:"calc(100% - 14px)" 
                }}
                i={i}
                onClick={this.handleSelected}
            >
                <span>{ i } : </span><span className="pretto-secs">00</span>
                    
            </div>
        </span>  
    }
}
export default withStyles(styles)(SliderSingle);