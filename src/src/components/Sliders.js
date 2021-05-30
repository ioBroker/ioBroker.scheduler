import React, { Component } from "react";
import { withStyles, makeStyles, useStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import defaultOptopns from "../data/defaultOptopns.json"
import defaultData from "../data/defaultData.json" 
import chroma from "chroma-js"; 
import { Button, Checkbox, Fab, FormControlLabel, Typography } from "@material-ui/core"; 
import SliderSingle from "./SliderSingle";

const styles = theme => ({
    tab: {
        width: '100%',
        minHeight: '100%'
    },
    column: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: 20
    },
    columnSettings: {
        width: 'calc(100% - 370px)',
    },
});

class Sliders extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            data : props.data
                ?
                props.data
                :
                defaultData.data,
            labels : props.data
                ?
                props.labels
                :
                defaultData.labels,
            options : props.options
                ?
                props.options
                :
                defaultOptopns.options,
            range : [0, 24],
            selected: []
        }
    }
    
    handleRangeChange = (event, newValue) => 
    {
        this.setState({range:newValue});
        console.log( newValue );
    }
    onChange =( field, value, i ) =>
    {        
        let state = {...this.state };
        //console.log( field, value, i );
        //console.log( state );
        state[ field ][i] = value; 
        //console.log(state);
        this.setState( state )
    }
    render()
    {
        const { data, options } = this.state;
        const { staff } = options; 
        const sliders = Array.isArray(data)
            ?
            data.map( (staff, i) =>
            {
                return <SliderSingle
                    key={i}
                    value={staff}
                    selected= { this.state.selected[i] }
                    label={""}
                    i={i}
                    on={this.onChange }

                /> 
            })
            :
            null;
        
        return <div 
            style={{ 
                width: options.width
            }}
        > 
            <div 
                className={"tapper-grid tapper-shadow m-1 p-1 "}
                style={{
                    padding : 20,
                    paddingBottom:0,
                    backgroundColor : options.backgrounds[0]
                }}    
            >
                <div 
                    className="tapper-inside"
                    style={{
                        padding: (staff.width + 30) + "px 40px " + (staff.width + 10)  + "px 40px",
                    }}
                >
                    { sliders }
                </div>      
                <div
                    style={{
                        padding: 30
                    }}
                >                
                    <Slider  
                        value={this.state.range}  
                        onChange={this.handleRangeChange} 
                        min={0}
                        max={24}               
                        valueLabelDisplay="off"
                        aria-labelledby="range-slider"
                    />
                </div>             
            </div>
            
        </div>
    }

}
export default withStyles(styles)(Sliders);