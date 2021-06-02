

import React, { Component, Fragment } from "react";
import { FormLabel, TextField } from "@material-ui/core";
import I18n from '@iobroker/adapter-react/i18n';

class DivicesPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            ...props,
            title: props.title ? props.title : "Devices"
        }
    }
    render()
    {
        return <Fragment>
            <FormLabel component="legend" className="tapper-title">
                {I18n.t( this.state.title )}
            </FormLabel>
            <TextField
                id="standard-full-width"
                label=""
                style={{ margin: 8 }}
                placeholder="Put device names per comma"
                helperText=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Fragment> 
    }

}
export default DivicesPanel;