

import React, { Component } from "react";
import { TextField } from "@material-ui/core";

class DivicesPanel extends Component
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
                <TextField
                id="standard-full-width"
                label="Devices"
                style={{ margin: 8 }}
                placeholder="Put device names per comma"
                helperText=""
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </div> 
        </div>
    }

}
export default DivicesPanel;