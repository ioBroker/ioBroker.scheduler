import React, { Component } from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import I18n from '@iobroker/adapter-react/i18n';

class TapperLeftPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            ...props
        }
    }
    render()
    {
        return <div className="">
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend" className="tapper-title">
                    {I18n.t( "Type")}
                </FormLabel>
                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel value="persent" control={<Radio color="primary" className={ "flow-little checkbox" } disableRipple={true}/>} label={I18n.t( "Persent")} />
                    <FormControlLabel value="temperature" control={<Radio color="primary" className={ "flow-little checkbox" } disableRipple={true}/>} label={I18n.t( "Temperature")} />
                    <FormControlLabel value="onnoff" control={<Radio color="primary" className={ "flow-little checkbox" } disableRipple={true}/>} label={I18n.t( "On/Off")} />
                </RadioGroup>
            </FormControl> 
        </div>  
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend" className="tapper-title">Priority</FormLabel>
                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel value="normal" control={<Radio color="primary"  className={ "flow-little checkbox" } disableRipple={true}/>} label={I18n.t( "Normal")} />
                    <FormControlLabel value="high" control={<Radio color="primary"  className={ "flow-little checkbox" } disableRipple={true}/>} label={I18n.t( "High")} />
                    <FormControlLabel value="highest" control={<Radio color="primary"  className={ "flow-little checkbox" } disableRipple={true}/>} label={I18n.t( "Highest eg. Holiday")} />
                </RadioGroup>
            </FormControl> 
        </div>  
    </div>
    }

}
export default TapperLeftPanel;