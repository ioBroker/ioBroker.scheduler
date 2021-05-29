import { MenuItem, MenuList, Typography } from "@material-ui/core";
import React, { Component } from "react";

class TapperPanel extends Component
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
            <MenuList>
                <MenuItem>
                    <Typography variant="inherit">Windows</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit" noWrap>
                        Basic
                    </Typography>                
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit">Heading</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit" noWrap>
                        Weekend
                    </Typography>                
                </MenuItem>
                
            </MenuList>
        </div>
    }

}
export default TapperPanel;