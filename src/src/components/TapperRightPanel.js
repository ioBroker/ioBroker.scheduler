import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from "react";

class TapperRightPanel extends Component
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
                    <FormLabel component="legend" className="tapper-title">Week</FormLabel>
                    <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                        <FormControlLabel 
                            value="sn" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label="Sn" 
                           
                            
                        />
                        <FormControlLabel 
                            value="mn" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label="Mn"
                            
                            
                        />
                        <FormControlLabel 
                            value="tu" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label="Tu" 
                            
                            
                        />
                        <FormControlLabel 
                            value="we" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label="We"
                            
                           
                        />
                        <FormControlLabel 
                            value="th" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label="Th"                             
                           
                            
                        />
                        <FormControlLabel 
                            value="fr" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label="Fr"
                           
                             
                            />
                        <FormControlLabel 
                            value="sa" 
                            control={<Checkbox color="primary"  className={ "flow checkbox" } disableRipple={true}/>} 
                            label="Sa" 
                          
                            
                        /> 
                    </RadioGroup>
                </FormControl> 
            </div>  
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend" className="tapper-title">Priority</FormLabel>
                    <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                        <FormControlLabel value="normal" control={<Radio color="primary"  className={ "flow-little checkbox" } disableRipple={true}/>} label="Normal" />
                        <FormControlLabel value="high" control={<Radio color="primary"  className={ "flow-little checkbox" } disableRipple={true}/>} label="High" />
                        <FormControlLabel value="highest" control={<Radio color="primary"  className={ "flow-little checkbox" } disableRipple={true}/>} label="Highest eg. Holiday" />
                    </RadioGroup>
                </FormControl> 
            </div>   
        </div>
    }

}
export default TapperRightPanel;