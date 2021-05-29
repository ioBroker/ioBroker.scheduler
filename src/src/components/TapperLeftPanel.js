import React, { Component } from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";

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
                <FormLabel component="legend" className="tapper-title">Type</FormLabel>
                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel value="persent" control={<Radio color="primary" className={ "flow-little checkbox" } disableRipple={true}/>} label="Persent" />
                    <FormControlLabel value="temperature" control={<Radio color="primary" className={ "flow-little checkbox" } disableRipple={true}/>} label="Temperature" />
                    <FormControlLabel value="onnoff" control={<Radio color="primary" className={ "flow-little checkbox" } disableRipple={true}/>} label="On/Off" />
                </RadioGroup>
            </FormControl> 
        </div> 
    </div>
    }

}
export default TapperLeftPanel;