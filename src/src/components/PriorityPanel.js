import React, { Component } from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
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
    on = (evt, priority) =>
    {
        if( evt.target.value )
        {
            this.setState({ priority });
            if( this.props.on )
                this.props.on( priority );
        }
            
        
    }
    render()
    {
        return <div className="">  
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend" className="tapper-title">Priority</FormLabel>
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
            </FormControl> 
        </div>  
    </div>
    }

}
export default PriorityPanel;