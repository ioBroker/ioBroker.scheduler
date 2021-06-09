import React, { Component } from "react";
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@material-ui/core";
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
                <InputLabel shrink id="type-select-label">{ I18n.t( "Type" ) }</InputLabel>
                <Select
                    labelId="type-select-label"
                    id="type-select" 
                    className="w-100"
                    value={type}
                    onChange={ this.on }
                >
                    <MenuItem value={"persent"}>
                        {I18n.t( "Persent")}
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
                        value="persent" 
                        control={
                            <Radio 
                                color="primary" 
                                className={ "flow-little checkbox" } 
                                checked={this.state.type == "persent"}
                                disableRipple
                                onChange={ evt => this.on( evt, "persent" ) }
                            />
                        } 
                        className="px-1"
                        label={I18n.t( "Persent")} 
                    />
                    <FormControlLabel 
                        value="temperature" 
                        control={
                            <Radio 
                                color="primary" 
                                className={ "flow-little checkbox" } 
                                checked={this.state.type == "temperature"}
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
                                checked={this.state.type == "onnoff"}
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