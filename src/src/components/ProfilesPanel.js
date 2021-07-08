import { Button, Dialog, DialogTitle, Divider, IconButton, Input, InputAdornment, MenuItem, MenuList, Typography, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import I18n from '@iobroker/adapter-react/i18n';
import { v4 as uuidv4 } from 'uuid';
import { Paper } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import SearchIcon from '@material-ui/icons/Search';
import FolderIcon from '@material-ui/icons/Folder';
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import ScheduleIcon from '@material-ui/icons/Schedule';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import CloseIcon from '@material-ui/icons/Close';

class ProfilesPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            isDialogOpen    : false,
            isSearch        : false,
            searchbled      : ""
        }
    } 
    onActive = id =>
    {
        if(this.props.on && !this.props.isEdit)
        {
            this.props.on( id )
        }
    }
    onClick = id =>
    { 
        setTimeout( () => this.onActive(id), 200 );
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
                element_id : element.id,
                element_parent: element.parent,
                isnew: false
            }
        )
    }
    onUpdateItem = evt =>
    {
        let menu = [ ...this.props.menu ];
        let newMenu= [];
        if(this.state.isnew)
        {
            newMenu = [...menu];
            newMenu.push({
                id: this.state.element_id,
                title : this.state.element_title,
                parent: this.state.element_parent,
                type: this.state.element_type
            })
        }
        else
        {
            menu.forEach((e, i) =>
            {
                if(e.id === this.state.element_id)
                {
                    newMenu[ i ] ={
                        n: this.state.element_id,
                        title : this.state.element_title,
                        parent: this.state.element_parent,
                        type: this.state.element_type                     
                    };
                }
                else
                    newMenu[i] = e;
            }); 
        }
        
        this.setState({ isDialogOpen : false,  isnew : false });
        this.props.onChangeMenu(newMenu)
    }
    onDeleteItem = () =>
    {
        let menu = [ ...this.props.menu ];
        let newMenu = [];
        menu.forEach((e, i) =>
        {
            if(e.id === this.state.element_id)
            {
                
            }
            else
                newMenu.push(e);
        }); 
        this.setState({ isDialogOpen : false,  isnew : false });
        this.props.onChangeMenu(newMenu)
    }
    onAddChild = (element, type) =>
    {        
        this.setState(
            { 
                isDialogOpen : true,
                element_title: I18n.t( type),
                element_type: type,
                element_id :  uuidv4(),
                element_parent: element.id,
                isnew: true
            }
        )
        this.props.onChangeMenu(this.props.menu)
    }
    onOpen = (id, is_open) =>
    { 
        let menu    = [ ...this.props.menu ];
        let newMenu = menu.map( e =>
        {
            if(e.id === id)  e.is_open = is_open;
            return e;    
        })
        this.props.onChangeMenu(newMenu)
    }
    onCloseAll = () =>
    {
        let menu    = [ ...this.props.menu ];
        let newMenu = menu.map( e =>
        {
            if(e.type === "folder")  e.is_open = false;
            return e;    
        })
        this.props.onChangeMenu(newMenu)
    }
    onOpenAll = () =>
    {
        let menu    = [ ...this.props.menu ];
        let newMenu = menu.map( e =>
        {
            if(e.type === "folder")  e.is_open = true;
            return e;    
        })
        this.props.onChangeMenu(newMenu)
    }
    folder = (fld, level) =>
    {
        const { menu, active } = this.props;
        const submenus = this.state.isSearch && this.state.searchbled
            ?
            null
            :
            menu
                .filter(sub => sub.parent === fld.id )
                    .map( sub =>
                    { 
                        return fld.is_open
                            ?
                            <div key={sub.id}>
                            {
                                sub.type === "profile" 
                                    ? 
                                    this.profile( sub, level + 1 ) 
                                    : 
                                    this.folder( sub, level + 1 )
                            }
                            </div>
                            :
                            null
                    });
        const folder_sample = fld.is_open
            ?  
            <FolderOpenIcon className="pr-1" onClick={ evt => this.onOpen(fld.id, false) }  /> 
            : 
            <FolderIcon     className="pr-1" onClick={ evt => this.onOpen(fld.id, true ) } />
        return <div key={ fld.id }>
            <MenuItem                     
                className={ "flow-menu-item " + ( active === fld.id ? " active " : "") } 
                onClick={() => this.onClick( fld.id )} 
                style={{ marginLeft: (level * 20) }}
                disableRipple
            >
                <Typography variant="inherit"  className=" w-100">
                    {folder_sample}  {I18n.t( fld.title  )}
                </Typography>

                <div className="absolute-right">
                    <div 
                        className="edit_button" 
                        title={I18n.t("Add new child profile")} 
                        onClick={() =>this.onAddChild( fld, "profile" )}
                    >
                        <AddIcon />
                    </div>
                    <div 
                        className="edit_button" 
                        title={I18n.t("Add new child folder")} 
                        onClick={() =>this.onAddChild( fld, "folder" )}
                    >
                        <CreateNewFolderIcon />
                    </div>
                    <div 
                        className="edit_button" 
                        title={I18n.t("Edit")}  
                        onClick={() => this.onEditDialog( fld )}
                    >
                        <EditIcon />
                    </div>
                </div>
                        
            </MenuItem>
            { submenus }
        </div>
    }
    profile = (sub, level) =>
    {
        const { active } = this.props;
        return <MenuItem                        
            className={ "flow-menu-item sub " + ( active === sub.id ? " active " : "") } 
            style={{ marginLeft: (level * 20) }}
            onClick={() => this.onClick( sub.id, level + 1 )} 
            disableRipple
        >
            <Typography variant="inherit" className="pl-1 w-100">
                <ScheduleIcon className="pr-1" /> {I18n.t( sub.title  )}
            </Typography>
            
            <div className="absolute-right">
                <div 
                    className="edit_button" 
                    title={I18n.t("Edit")} 
                    onClick={ () => this.onEditDialog( sub ) }
                >
                    <EditIcon />
                </div> 
            </div>

        </MenuItem>
    }
    onSearch = () =>
    {
        this.setState({ isSearch : !this.state.isSearch, searchbled: "" });
    }
    onSearchedText = evt =>
    {
        const text = evt.target.value;
        this.setState( { searchbled : text } );
    }
    head = () =>
    {
        const { menu } = this.props;
        return this.state.isSearch
            ?
            <>
                <TextField
                    className="ml-1 w-100" 
                    placeholder={I18n.t("search text")}
                    onChange={ this.onSearchedText }
                />
                 <IconButton  
                    aria-label="upload picture" 
                    component="span"
                    size="small" 
                    title={I18n.t("finish searching")}
                    onClick={ this.onSearch }
                >
                   <CloseIcon />  
                </IconButton> 
            </>
            :
            <>
                <IconButton  
                    aria-label="upload picture" 
                    component="span"
                    size="small" 
                    title={I18n.t("Add folder")}
                    onClick={ 
                        () => {
                            this.onAddChild( { id : "" }, "folder" );
                            setTimeout( () => {
                                // this.onUpdateItem()
                            }, 200);
                        }
                    }
                >
                   <CreateNewFolderIcon />  
                </IconButton>
                {
                    menu.filter(e => e.is_open ).length > 0
                        ?
                        <IconButton  
                            aria-label="upload picture" 
                            component="span"
                            size="small"
                            title={I18n.t("Close all")}
                        >
                            <UnfoldLessIcon 
                                onClick={this.onCloseAll}
                            />
                        </IconButton>                        
                        :                        
                        <IconButton  
                            aria-label="upload picture" 
                            component="span"
                            size="small"
                            title={I18n.t("Open all")}
                        >
                            <UnfoldMoreIcon 
                                onClick={ this.onOpenAll }
                            />
                        </IconButton>
                        
                }
                <IconButton  
                    aria-label="upload picture" 
                    component="span"
                    size="small" 
                    className="ml-auto" 
                    title={I18n.t("Search")}
                    onClick={ this.onSearch }
                >
                   <SearchIcon />  
                </IconButton>
            </>
    }
    render()
    {
        const { isDialogOpen } = this.state;
        const { menu } = this.props;
        const items = this.state.isSearch && this.state.searchbled
            ?
            menu
                .map((e) =>
                {
                    return e.title.toLowerCase().indexOf( this.state.searchbled.toLowerCase() ) > -1
                        ?
                        e.type === "folder"
                            ?
                            this.folder(e, 0)
                            :
                            this.profile(e, 0)
                        :
                        null
                })
            :
            menu
                .filter(e => e.parent === "" )
                    .map((e) =>
                    {
                        return this.folder(e, 0);
                    })
        return <div className="flow-menu flex-grow-1000 scrolled-auto m-0" onClick={ () => this.onActive( -1 ) } >
            <Paper className="d-flex" style={{ height : 32 }}> 
                { this.head() }
            </Paper>
            <Divider>

            </Divider>
            <MenuList className="p-1">
                { items }
            </MenuList>
            
            <Dialog 
                onClose={ this.onDialog } 
                aria-labelledby="simple-dialog-title" 
                open={isDialogOpen}
            >
                <DialogTitle id="simple-dialog-title">
                    {I18n.t("Edit")}
                </DialogTitle>
                <div className="p-2 flex-column" style={{ width:250, minHeight:200 }}>
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
                    <div className="mt-auto">
                        <Button onClick={ this.onUpdateItem }>
                            {I18n.t( this.state.isnew ? "create" : "update" )}
                        </Button>
                        {
                            this.state.isnew
                                ?
                                null
                                :
                                <Button onClick={ this.onDeleteItem }>
                                    {I18n.t( "delete" )}
                                </Button>

                        }
                    </div>
                </div>
            </Dialog>
        </div>
    }

}
export default ProfilesPanel;