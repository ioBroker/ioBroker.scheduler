import React, { Component } from "react";
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from "@material-ui/core";
import I18n from '@iobroker/adapter-react/i18n';

class PriorityPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            priority: props.priority
        }
    }
    on = evt =>
    {
        const priority = evt.target.value
        if( priority )
        {
            this.setState({ priority });
            if( this.props.on )
                this.props.on( priority );
        }
            
        
    }
    render()
    {
        const{priority} = this.state;
        return <FormControl component="fieldset"  className="w-100"> 
            <FormLabel component="legend" className="tapper-title">{ I18n.t( "Priority" ) }</FormLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="w-100"
                value={priority}
                onChange={ this.on }
            >
                <MenuItem value={"normal"}>
                    {I18n.t( "Normal")}
                </MenuItem>
                <MenuItem value={"high"}>
                    {I18n.t( "High")}
                </MenuItem>
                <MenuItem value={"highest"}>
                    {I18n.t( "Highest eg. Holiday")}
                </MenuItem>
            </Select>
            {/*
            <RadioGroup 
                defaultValue="female" 
                aria-label="gender"
                name="customized-radios"
            >
                <FormControlLabel 
                    value="normal" 
                    control={
                        <Radio 
                            color="primary"
                            className={ "flow-little checkbox" } 
                            disableRipple
                        />
                    } 
                    className="px-1"
                    label={I18n.t( "Normal")}
                />
                <FormControlLabel 
                    value="high" 
                    control={
                        <Radio 
                            color="primary"
                            className={ "flow-little checkbox" } 
                            disableRipple
                        />
                    } 
                    className="px-1"
                    label={I18n.t( "High")} 
                />
                <FormControlLabel 
                    value="highest" 
                    control={
                        <Radio 
                            color="primary"  
                            className={ "flow-little checkbox" } 
                            disableRipple
                        />
                    } 
                    className="px-1"
                    label={I18n.t( "Highest eg. Holiday")} 
                />
            </RadioGroup>
            */}
        </FormControl> 
    }

}
export default PriorityPanel;