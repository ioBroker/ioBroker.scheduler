import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from "react";
import I18n from '@iobroker/adapter-react/i18n';

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
                            label={I18n.t( "Sn" )}
                           
                            
                        />
                        <FormControlLabel 
                            value="mn" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label={I18n.t( "Mn" )}
                            
                            
                        />
                        <FormControlLabel 
                            value="tu" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label={I18n.t( "Tu" )} 
                            
                            
                        />
                        <FormControlLabel 
                            value="we" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label={I18n.t( "We" )}
                            
                           
                        />
                        <FormControlLabel 
                            value="th" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label={I18n.t( "Th" )}                            
                           
                            
                        />
                        <FormControlLabel 
                            value="fr" 
                            control={<Checkbox color="primary" className={ "flow checkbox" } disableRipple={true}/>} 
                            label={I18n.t( "Fr" )}
                           
                             
                            />
                        <FormControlLabel 
                            value="sa" 
                            control={<Checkbox color="primary"  className={ "flow checkbox" } disableRipple={true}/>} 
                            label={I18n.t( "Sa" )} 
                          
                            
                        /> 
                    </RadioGroup>
                </FormControl> 
            </div>  
        </div>
    }

}
export default TapperRightPanel;