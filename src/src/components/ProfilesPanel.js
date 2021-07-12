import PropTypes from 'prop-types';
import {
    Button, Dialog, DialogTitle, Divider, IconButton, Input, InputAdornment, MenuItem, MenuList, Typography, TextField, Paper,
} from '@material-ui/core';
import React, { Component } from 'react';
import I18n from '@iobroker/adapter-react/i18n';
import { v4 as uuidv4 } from 'uuid';

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

const defaultProfileData = {
    enabled: false,
    name: 'Basic',
    members: ['id1', 'id2'],
    type: 'temperature',
    prio: 0, // 0 normal, 1 - high, 2 - highest
    dow: [1, 2, 3, 4, 5], // 0 - sunday, 1 - monday
    intervalDuration: 0.5, // in hours
    intervals: [3, 14, 6, 22, 18, 3, 14, 6, 22, 18, 3, 14, 6, 22, 18, 3, 14, 6, 22, 18, 3, 14, 6, 22, 22],
};

class ProfilesPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            isSearch: false,
            searchText: '',
        };
    }

    onActive = id => {
        this.props.onSelectProfile(id);
    }

    onDialog = () => {
        this.setState({ isDialogOpen: !this.state.isDialogOpen });
    }

    onEditDialog = element => {
        this.setState(
            {
                isDialogOpen: true,
                dialogElementTitle: element.title,
                dialogElementId: element.id,
                dialogElementParent: element.parent,
                isNew: false,
            },
        );
    }

    onUpdateItem = () => {
        const newProfiles = JSON.parse(JSON.stringify(this.props.profiles));
        if (this.state.isNew) {
            newProfiles.push({
                id: this.state.dialogElementId,
                title: this.state.dialogElementTitle,
                parent: this.state.dialogElementParent,
                type: this.state.dialogElementType,
                data: defaultProfileData,
                isOpen: true,
            });
        } else {
            const profile = newProfiles.find(foundProfile => foundProfile.id === this.state.dialogElementId);
            profile.title = this.state.dialogElementTitle;
        }

        this.setState({ isDialogOpen: false, isNew: false });
        this.props.onChangeProfiles(newProfiles);
    }

    onDeleteItem = () => {
        const profiles = [...this.props.profiles];
        const newProfiles = [];
        profiles.forEach(e => {
            if (e.id !== this.state.dialogElementId) {
                newProfiles.push(e);
            }
        });
        this.setState({ isDialogOpen: false, isNew: false });
        this.props.onChangeProfiles(newProfiles);
    }

    onAddChild = (element, type) => {
        this.setState(
            {
                isDialogOpen: true,
                dialogElementTitle: I18n.t(type),
                dialogElementType: type,
                dialogElementId: uuidv4(),
                dialogElementParent: element.id,
                isNew: true,
            },
        );
    }

    onOpen = (id, isOpen) => {
        const profiles = [...this.props.profiles];
        const newProfiles = profiles.map(e => {
            if (e.id === id) e.isOpen = isOpen;
            return e;
        });
        this.props.onChangeProfiles(newProfiles);
    }

    onCloseAll = () => {
        const profiles = [...this.props.profiles];
        const newProfiles = profiles.map(e => {
            if (e.type === 'folder') e.isOpen = false;
            return e;
        });
        this.props.onChangeProfiles(newProfiles);
    }

    onOpenAll = () => {
        const profiles = [...this.props.profiles];
        const newProfiles = profiles.map(e => {
            if (e.type === 'folder') e.isOpen = true;
            return e;
        });
        this.props.onChangeProfiles(newProfiles);
    }

    folder = (fld, level) => {
        const { profiles, active } = this.props;
        const subProfiles = this.state.isSearch && this.state.searchText
            ? null
            : profiles
                .filter(sub => sub.parent === fld.id)
                .map(sub => (fld.isOpen
                    ? (
                        <div key={sub.id}>
                            {
                                sub.type === 'profile'
                                    ? this.profile(sub, level + 1)
                                    : this.folder(sub, level + 1)
                            }
                        </div>
                    )
                    : null));
        const folderSample = fld.isOpen
            ? (
                <FolderOpenIcon
                    className="pr-1"
                    onClick={e => {
                        this.onOpen(fld.id, false);
                        e.stopPropagation();
                    }}
                />
            )
            : (
                <FolderIcon
                    className="pr-1"
                    onClick={e => {
                        this.onOpen(fld.id, true);
                        e.stopPropagation();
                    }}
                />
            );
        return (
            <div key={fld.id}>
                <MenuItem
                    className={`flow-menu-item ${active === fld.id ? ' active ' : ''}`}
                    onClick={() => this.onActive(fld.id)}
                    style={{ marginLeft: (level * 20) }}
                    disableRipple
                >
                    <Typography variant="inherit" className="w-100">
                        {folderSample}
                        {' '}
                        {I18n.t(fld.title)}
                    </Typography>

                    <div className="absolute-right">
                        <div
                            className="edit_button"
                            title={I18n.t('Add new child profile')}
                            onClick={() => this.onAddChild(fld, 'profile')}
                        >
                            <AddIcon />
                        </div>
                        <div
                            className="edit_button"
                            title={I18n.t('Add new child folder')}
                            onClick={() => this.onAddChild(fld, 'folder')}
                        >
                            <CreateNewFolderIcon />
                        </div>
                        <div
                            className="edit_button"
                            title={I18n.t('Edit')}
                            onClick={() => this.onEditDialog(fld)}
                        >
                            <EditIcon />
                        </div>
                    </div>

                </MenuItem>
                { subProfiles }
            </div>
        );
    }

    profile = (sub, level) => {
        const { active } = this.props;
        return (
            <MenuItem
                className={`flow-menu-item sub ${active === sub.id ? ' active ' : ''}`}
                style={{ marginLeft: (level * 20) }}
                onClick={() => this.onActive(sub.id)}
                disableRipple
            >
                <Typography variant="inherit" className="pl-1 w-100">
                    <ScheduleIcon className="pr-1" />
                    {' '}
                    {I18n.t(sub.title)}
                </Typography>

                <div className="absolute-right">
                    <div
                        className="edit_button"
                        title={I18n.t('Edit')}
                        onClick={() => this.onEditDialog(sub)}
                    >
                        <EditIcon />
                    </div>
                </div>

            </MenuItem>
        );
    }

    onSearch = () => {
        this.setState({ isSearch: !this.state.isSearch, searchText: '' });
    }

    onSearchedText = evt => {
        const text = evt.target.value;
        this.setState({ searchText: text });
    }

    head = () => {
        const { profiles } = this.props;
        return this.state.isSearch
            ? (
                <>
                    <TextField
                        className="ml-1 w-100"
                        placeholder={I18n.t('search text')}
                        onChange={this.onSearchedText}
                    />
                    <IconButton
                        aria-label="upload picture"
                        component="span"
                        size="small"
                        title={I18n.t('finish searching')}
                        onClick={this.onSearch}
                    >
                        <CloseIcon />
                    </IconButton>
                </>
            )
            : (
                <>
                    <IconButton
                        aria-label="upload picture"
                        component="span"
                        size="small"
                        title={I18n.t('Add folder')}
                        onClick={
                            () => {
                                this.onAddChild({ id: '' }, 'folder');
                            }
                        }
                    >
                        <CreateNewFolderIcon />
                    </IconButton>
                    {
                        profiles.length ? (
                            profiles.filter(e => e.isOpen).length > 0
                                ? (
                                    <IconButton
                                        aria-label="upload picture"
                                        component="span"
                                        size="small"
                                        title={I18n.t('Close all')}
                                        onClick={this.onCloseAll}
                                    >
                                        <UnfoldLessIcon />
                                    </IconButton>
                                )
                                : (
                                    <IconButton
                                        aria-label="upload picture"
                                        component="span"
                                        size="small"
                                        title={I18n.t('Open all')}
                                        onClick={this.onOpenAll}
                                    >
                                        <UnfoldMoreIcon />
                                    </IconButton>
                                )
                        ) : null
                    }
                    <IconButton
                        aria-label="upload picture"
                        component="span"
                        size="small"
                        className="ml-auto"
                        title={I18n.t('Search')}
                        onClick={this.onSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                </>
            );
    }

    render() {
        const { isDialogOpen } = this.state;
        const { profiles } = this.props;
        const items = this.state.isSearch && this.state.searchText
            ? profiles
                .map(e => (e.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1
                    ? e.type === 'folder'
                        ? this.folder(e, 0)
                        : this.profile(e, 0)
                    : null))
            : profiles
                .filter(e => e.parent === '')
                .map(e => this.folder(e, 0));
        return (
            <div className="flow-menu flex-grow-1000 scrolled-auto m-0">
                <Paper className="d-flex" style={{ height: 32 }}>
                    { this.head() }
                </Paper>
                <Divider />
                <MenuList className="p-1">
                    { items }
                </MenuList>

                <Dialog
                    onClose={this.onDialog}
                    aria-labelledby="simple-dialog-title"
                    open={isDialogOpen}
                >
                    <DialogTitle id="simple-dialog-title">
                        {I18n.t('Edit')}
                    </DialogTitle>
                    <div className="p-2 flex-column" style={{ width: 250, minHeight: 200 }}>
                        <div className="p-2">
                            <div htmlFor="label">
                                {I18n.t('label')}
                            </div>
                            <Input
                                id="label"
                                value={this.state.dialogElementTitle}
                                onChange={evt => this.setState({ dialogElementTitle: evt.target.value })}
                                startAdornment={(
                                    <InputAdornment position="start">
                                        <EditIcon />
                                    </InputAdornment>
                                )}
                            />
                        </div>
                        <div className="mt-auto">
                            <Button onClick={this.onUpdateItem} variant="contained" color="primary">
                                {I18n.t(this.state.isNew ? 'create' : 'update')}
                            </Button>
                            {
                                this.state.isNew
                                    ? null
                                    : (
                                        <Button onClick={this.onDeleteItem} variant="contained">
                                            {I18n.t('delete')}
                                        </Button>
                                    )

                            }
                        </div>
                    </div>
                </Dialog>
            </div>
        );
    }
}

ProfilesPanel.propTypes = {
    active: PropTypes.any,
    profiles: PropTypes.array,
    onSelectProfile: PropTypes.func,
    onChangeProfiles: PropTypes.func,
};
export default ProfilesPanel;
