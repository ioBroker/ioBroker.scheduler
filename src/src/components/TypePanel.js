import React, { Component } from "react";
import { FormControl, FormLabel, MenuItem, Select } from "@material-ui/core";
import I18n from '@iobroker/adapter-react/i18n';

class TypePanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            type: props.type,
            _width: props._width
        
        }
    }
    on = evt =>
    {
        const type = evt.target.value;
        if( type )
        {
            this.setState({type});
            if( this.props.on )
                this.props.on(type);
        }
            
        
    }
    render()
    {
        const{type} = this.state;
        return <FormControl component="fieldset" className="w-100"> 
                <FormLabel component="legend" className="tapper-title">{ I18n.t( "Type" ) }</FormLabel>
                <Select
                    labelId="type-select-label"
                    id="type-select" 
                    className="w-100"
                    value={type}
                    onChange={ this.on }
                >
                    <MenuItem value={"percent"}>
                        {I18n.t( "Percent")}
                    </MenuItem>
                    <MenuItem value={"temperature"}>
                        {I18n.t( "Temperature")}
                    </MenuItem>
                    <MenuItem value={"onnoff"}>
                        {I18n.t( "On/Off")}
                    </MenuItem>
                </Select>
                {/*
                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel 
                        value="percent" 
                        control={
                            <Radio 
                                color="primary" 
                                className={ "flow-little checkbox" } 
                                checked={this.state.type === "percent"}
                                disableRipple
                                onChange={ evt => this.on( evt, "percent" ) }
                            />
                        } 
                        className="px-1"
                        label={I18n.t( "Percent")} 
                    />
                    <FormControlLabel 
                        value="temperature" 
                        control={
                            <Radio 
                                color="primary" 
                                className={ "flow-little checkbox" } 
                                checked={this.state.type === "temperature"}
                                disableRipple
                                onChange={ evt => this.on( evt, "temperature" ) }
                            />} 
                        className="px-1"
                        label={I18n.t( "Temperature")} 
                    />
                    <FormControlLabel 
                        value="onnoff" 
                        control={
                            <Radio 
                                color="primary" 
                                checked={this.state.type === "onnoff"}
                                className={ "flow-little checkbox" } 
                                disableRipple
                                onChange={ evt => this.on( evt,  "onnoff" ) }
                            />
                        } 
                        className="px-1"
                        label={I18n.t( "On/Off")} 
                    />
                </RadioGroup>
                */}
            </FormControl>
    }

}
export default TypePanel;