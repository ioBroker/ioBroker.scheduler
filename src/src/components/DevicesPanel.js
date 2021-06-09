

import React, { Component, Fragment } from "react";
import { FormLabel, TextField, withStyles } from "@material-ui/core";
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
        const CssTextField = withStyles({
            root: {
                backgroundColor:"#FFFFFF12", 
                padding: 20,
                borderRadius:15,                
                display: "flex",
                width: "auto"
            },
          })(TextField);
        return <>
            <FormLabel component="legend" className="tapper-title">
                {I18n.t( this.state.title )}
            </FormLabel>
            <CssTextField
                id="standard-full-width"
                label=""
                style={{ }}
                className="p-0 m-0"
                placeholder={I18n.t( "Put device names per comma" )}
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
export default DivicesPanel;