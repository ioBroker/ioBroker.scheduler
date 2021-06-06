import { Button, Dialog, DialogTitle, FormControl, Input, InputAdornment, InputLabel, MenuItem, MenuList, TextField, Typography } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import I18n from '@iobroker/adapter-react/i18n';

import EditIcon from '@material-ui/icons/Edit';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'; 

class TapperPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            ...props,
            active: typeof props.active !== "undefined" ? props.active : 0,
            isDialogOpen : false
        }
    }
    componentWillUpdate(nextProps)
    {
        if(nextProps.active != this.state.active)
        {
            this.setState({ active: nextProps.active });
        }
        if(nextProps.menu != this.state.menu)
        {
            this.setState({ menu: nextProps.menu });
        }
        if(nextProps.isEdit != this.state.isEdit)
        {
            this.setState({ isEdit: nextProps.isEdit });
        }
    }
    onClick = id =>
    { 
        if(this.props.on && !this.state.isEdit)
        {
            this.props.on( id )
        }
    }
    onDialog = () =>
    {
        this.setState({ isDialogOpen : !this.state.isDialogOpen })
    }
    onEditDialog = element =>
    { 
        this.setState(
            { 
                isDialogOpen : true,
                element_title: element.title,
                element_id: element.id,
                element_n : element.n,
                element_parent: element.parent,
                isnew: false
            }
        )
    }
    onUpdateItem = evt =>
    {
        let menu = [ ...this.state.menu ];
        let newMenu= [];
        if(this.state.isnew)
        {
            newMenu = [...menu];
            newMenu.push({
                n: this.state.element_n,
                id : this.state.element_id,
                title : this.state.element_title,
                parent: this.state.element_parent  
            })
        }
        else
        {
            menu.forEach((e, i) =>
            {
                if(e.n == this.state.element_n)
                {
                    newMenu[ i ] ={
                        n: this.state.element_n,
                        id : this.state.element_id,
                        title : this.state.element_title,
                        parent: this.state.element_parent                      
                    };
                }
                else
                    newMenu[i] = e;
            }); 
        }
        
        this.setState({ menu:newMenu,  isDialogOpen : false,  isnew : false });
        if(this.props.onChangeMenu)
        {
            this.props.onChangeMenu(newMenu, this.state.max_menu_id)
        }
    }
    onDeleteItem = () =>
    {
        let menu = [ ...this.state.menu ];
        let newMenu = [];
        menu.forEach((e, i) =>
        {
            if(e.n == this.state.element_n)
            {
                
            }
            else
                newMenu.push(e);
        }); 
        this.setState({ menu:newMenu,  isDialogOpen : false,  isnew : false });
        if(this.props.onChangeMenu)
        {
            this.props.onChangeMenu(newMenu, this.state.max_menu_id)
        }
    }
    onAddChild = element =>
    {        
        this.setState(
            { 
                isDialogOpen : true,
                element_title: "new title",
                element_id:  "new-id",
                element_n :  this.state.max_menu_id + 1,
                max_menu_id: this.state.max_menu_id + 1,
                element_parent: element.n,
                isnew: true
            }
        )
    }
    render()
    {
        const {active, menu, isEdit, isDialogOpen, dialog_content } = this.state;
        const items = menu.map((e, i) =>
        {
            if(e.parent == "")
            {
                const submenus = menu
                    .filter(sub => sub.parent == e.n )
                        .map((sub, index) =>
                        { 
                            return <MenuItem   
                                key={sub.n}                  
                                className={ "flow-menu-item sub " + ( isEdit ? " disable " : active == sub.n ? " active " : "") } 
                                onClick={() => this.onClick( sub.n )} 
                                disableRipple
                            >
                                <Typography variant="inherit">
                                    {I18n.t( sub.title  )}
                                </Typography>
                                {
                                    isEdit
                                        ?
                                        <div className="absolute-right">
                                            <div 
                                                className="edit_button" 
                                                title={I18n.t("Add new child")} 
                                                onClick={ () => this.onEditDialog( sub ) }
                                            >
                                                <EditIcon />
                                            </div> 
                                        </div>
                                        :
                                        null
                                }
                            </MenuItem>
                        }) 
                return <div key={ e.n }>
                    <MenuItem                     
                        className={ "flow-menu-item" + ( isEdit ? " disable " : active == e.n ? " active " : "") } 
                        onClick={() => this.onClick( e.n )} 
                        
                        disableRipple
                    >
                        <Typography variant="inherit">
                            {I18n.t( e.title  )}
                        </Typography>
                        {
                            isEdit
                                ?
                                <div className="absolute-right">
                                    <div 
                                        className="edit_button" 
                                        title={I18n.t("Add new child")} 
                                        onClick={() =>this.onAddChild( e )}
                                    >
                                        <PlaylistAddIcon />
                                    </div>
                                    <div 
                                        className="edit_button" 
                                        title={I18n.t("Edit button")}  
                                        onClick={() => this.onEditDialog( e )}
                                    >
                                        <EditIcon />
                                    </div>
                                </div>
                                :
                                null
                        }
                    </MenuItem>
                    { submenus }
                </div>
            }               
            else
               return null
        })
        return <div className="flow-menu  scrolled-auto">
            <MenuList>
                { items }
            </MenuList>
            {
                isEdit
                    ?
                    <div className="flow-menu ">
                        <div 
                            className={"tapper-edit w-100"}
                            onClick={ () =>this.onAddChild( { n : "" } ) } 
                        >
                        <PlaylistAddIcon />  {I18n.t( "Add Button")}
                        </div>            
                    </div>
                    :
                    null
            }
            
            <Dialog 
                onClose={ this.onDialog } 
                aria-labelledby="simple-dialog-title" 
                open={isDialogOpen}
            >
                <DialogTitle id="simple-dialog-title">
                    {I18n.t("Edit button")}
                </DialogTitle>
                <div className="p-2" style={{ width:250, minHeight:200 }}>
                    <div className="p-2">
                        <div htmlFor="menu-item">
                            {I18n.t( "menu item" )}
                        </div>
                        <Input 
                            id="menu-item" 
                            value={ this.state.element_id } 
                            onChange={ evt => this.setState({ element_id : evt.target.value })} 
                            startAdornment={
                                <InputAdornment position="start">
                                    <EditIcon />
                                </InputAdornment>
                            }
                        />
                    </div> 
                    <div className="p-2">
                        <div htmlFor="label">
                            {I18n.t( "label" )}
                        </div>
                        <Input 
                            id="label" 
                            value={ this.state.element_title } 
                            onChange={ evt => this.setState({ element_title : evt.target.value })} 
                            startAdornment={
                                <InputAdornment position="start">
                                    <EditIcon />
                                </InputAdornment>
                            }/>
                    </div> 
                    <div>
                        <Button onClick={ this.onUpdateItem }>
                            {I18n.t( this.state.isnew ? "create" : "update" )}
                        </Button>
                        {
                            this.state.isnew
                                ?
                                null
                                :
                                <Button onClick={ this.onDeleteItem }>
                                    {I18n.t( "delete button" )}
                                </Button>

                        }
                    </div>
                </div>
            </Dialog>
        </div>
    }

}
export default TapperPanel;