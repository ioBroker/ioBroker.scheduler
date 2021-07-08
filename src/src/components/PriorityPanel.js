import React, { Component } from 'react';
import { FormControl, FormLabel, MenuItem, Select } from '@material-ui/core';
import I18n from '@iobroker/adapter-react/i18n';

class PriorityPanel extends Component
{
    on = evt =>
    {
        const priority = evt.target.value
        this.props.on( priority );
        
    }
    render()
    {
        const {priority} = this.props;
        return <FormControl component="fieldset"  className="w-100"> 
            <FormLabel component="legend" className="tapper-title">{ I18n.t( 'Priority' ) }</FormLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="w-100"
                value={priority}
                onChange={ this.on }
            >
                <MenuItem value={0}>
                    {I18n.t( 'Normal' )}
                </MenuItem>
                <MenuItem value={1}>
                    {I18n.t( 'High' )}
                </MenuItem>
                <MenuItem value={2}>
                    {I18n.t( 'Highest eg. Holiday' )}
                </MenuItem>
            </Select>
        </FormControl> 
    }

}
export default PriorityPanel;