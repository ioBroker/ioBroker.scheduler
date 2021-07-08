

import React, { Component } from 'react';
import { FormLabel, TextField, withStyles } from '@material-ui/core';
import I18n from '@iobroker/adapter-react/i18n';

const CssTextField = withStyles({
    root: {
        backgroundColor:'#FFFFFF12', 
        padding: 0,
        margin: 0,
        borderRadius:15,                
        display: 'flex',
        width: 'auto'
    },
  })(TextField);

  class DevicesPanel extends Component
{
    render()
    {
        const title = this.props.title ? this.props.title : 'Devices';
        return <>
            <FormLabel component="legend" className="tapper-title">
                {I18n.t( title )}
            </FormLabel>
            <CssTextField
                id="standard-full-width"
                label=""
                style={{ }}
                value={this.props.members.join(', ')}
                onChange={e => this.props.onChange(e.target.value)}
                className="p-0 m-0"
                placeholder={I18n.t( 'Put device names per comma' )}
                helperText=""
                fullWidth
                margin="normal"
                multiline
                rows={ this.props.rows || 3 }
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </> 
    }

}
export default DevicesPanel;