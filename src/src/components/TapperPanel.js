import { MenuItem, MenuList, Typography } from "@material-ui/core";
import React, { Component } from "react";
import I18n from '@iobroker/adapter-react/i18n';

class TapperPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            ...props,
            active: typeof props.active !== "undefined" ? props.active : 0
        }
    }
    onClick = i =>
    {
        this.setState( { active : i } );
    }
    render()
    {
        const {active} = this.state;
        return <div className="flow-menu">
            <MenuList>
                <MenuItem 
                    className={ "flow-menu-item" + ( active == -1 ? " active " : "") } 
                    onClick={() => this.onClick(-1)}
                    disableFocusRipple
                    disableRipple
                >
                    <Typography variant="inherit">
                        {I18n.t( "Main")}
                    </Typography>
                </MenuItem>
                <MenuItem 
                    className={ "flow-menu-item" + ( active == 0 ? " active " : "") } 
                    onClick={() => this.onClick(0)}
                    disableFocusRipple
                    disableRipple
                >
                    <Typography variant="inherit">
                        {I18n.t( "Windows")}
                    </Typography>
                </MenuItem>
                <MenuItem 
                    className={ "flow-menu-item sub" + ( active == 1 ? " active " : "") } 
                    onClick={() => this.onClick(1)}
                    disableFocusRipple
                    disableRipple
                >
                    <Typography variant="inherit" noWrap>
                        {I18n.t( "Basic")}
                    </Typography>                
                </MenuItem>
                <MenuItem 
                    className={ "flow-menu-item" + ( active == 2 ? " active " : "") } 
                    onClick={() => this.onClick(2)}
                    disableFocusRipple
                    disableRipple
                >
                    <Typography variant="inherit">
                        {I18n.t( "Heading")}
                    </Typography>
                </MenuItem>
                <MenuItem 
                    className={ "flow-menu-item sub" + ( active == 3 ? " active " : "") } 
                    onClick={() => this.onClick(3)}
                    disableFocusRipple
                    disableRipple
                >
                    <Typography variant="inherit" noWrap>
                        {I18n.t( "Weekend")}
                    </Typography>                
                </MenuItem>
                <MenuItem 
                    className={ "flow-menu-item sub" + ( active == 4 ? " active " : "") } 
                    onClick={() => this.onClick(4)}
                    disableFocusRipple
                    disableRipple
                >
                    <Typography variant="inherit" noWrap>
                        {I18n.t( "Weekday")}
                    </Typography>                
                </MenuItem>
                
            </MenuList>
        </div>
    }

}
export default TapperPanel;