import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { v4 as uuidv4 } from 'uuid';

import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import {
    Button,
    Dialog,
    DialogTitle,
    Divider,
    IconButton,
    InputAdornment,
    MenuItem,
    MenuList,
    Typography,
    TextField,
    Paper,
    DialogContent, DialogActions,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import SearchIcon from '@material-ui/icons/Search';
import ScheduleIcon from '@material-ui/icons/Schedule';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import FolderIcon from '@iobroker/adapter-react/icons/IconClosed';
import FolderOpenIcon from '@iobroker/adapter-react/icons/IconOpen';

import I18n from '@iobroker/adapter-react/i18n';

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

function isTouchDevice() {
    return (('ontouchstart' in window)
        || (navigator.maxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
}

const styles = theme => ({
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    scrolledAuto: {
        overflowX: 'hidden',
        overflowY: 'auto',
        flexGrow: 1000,
        width: 'calc(100% - 30px)',
        margin: 0,
    },
    tapperTitle: {
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        paddingBottom: '1rem!important',
    },
    editButton:
    {
        width: 30,
        height: 30,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 2,
        '&:active':
        {
            color: '#EEE',
        },
        '&>svg':
        {
            fontSize: '1.2rem',
        },
        '.flow-menu-item:hover &':
        {
            display: 'flex',
        },
        '.flow-menu-item.active &':
        {
            display: 'flex',
        },
    },
    flowMenuItem: {
        height: 28,
        maxHeight: 28,
        minHeight: 28,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        '&.active':
        {
            backgroundColor: () => theme.palette.primary.light,
            color: '#FFF',
        },
        '&:hover':
        {
            backgroundColor: () => theme.palette.primary.dark,
            color: theme.palette.grey[200],
        },
        '&::before':
        {
            width: 20,
            height: 20,
        },
    },
    active: {

    },
    head: {
        height: 32,
        display: 'flex',
        marginRight: 20,
        boxShadow: 'none',
    },
    divide: {
        marginRight: 20,
        marginTop: 8,
    },
    searchIcon:
    {
        marginLeft: 'auto',
    },
});

const ProfileDrag = props => {
    const [{ isDragging }, dragRef, preview] = useDrag(
        {
            type: 'profile',
            item: () => ({ profileId: props.profileData.id, preview: props.children }),
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult();
                if (item && dropResult) {
                    props.onMoveItem(item.profileId, dropResult.folderId);
                }
            },
            collect: monitor => ({
                isDragging: monitor.isDragging(),
                handlerId: monitor.getHandlerId(),
            }),
        },
    );

    return <div ref={dragRef}>
        {props.children}
    </div>;
};

const FolderDrop = props => {
    const [{ CanDrop, isOver, isCanDrop }, drop] = useDrop(() => ({
        accept: 'profile',
        drop: () => ({ folderId: props.folderData.id }),
        canDrop: (item, monitor) => canDrop(monitor.getItem().profileId, props.folderData.id, props.profiles),
        collect: (monitor, item) => ({
            isOver: monitor.isOver(),
            CanDrop: monitor.canDrop(),
        }),
    }), [props.profiles]);

    return <div ref={drop}>
        {props.children}
    </div>;
};

function canDrop(childId, parentId, profiles) {
    const child = profiles.find(profile => profile.id === childId);
    if (!child.parent && !parentId) {
        return false;
    }
    if (!parentId) {
        return true;
    }
    if (child.parent === parentId) {
        return false;
    }

    let foundParent = profiles.find(profile => profile.id === parentId);
    while (foundParent.parent) {
        if (foundParent.parent === childId) {
            return false;
        }
        foundParent = foundParent.parent;
    }
    return true;
}

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
                dialogOriginalElementTitle: element.title,
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

    onMoveItem = (profileId, newParentId) => {
        const newProfiles = JSON.parse(JSON.stringify(this.props.profiles));
        const profile = newProfiles.find(foundProfile => foundProfile.id === profileId);
        profile.parent = newParentId;
        this.props.onChangeProfiles(newProfiles);
    }

    onAddChild = (element, type) => {
        this.setState(
            {
                isDialogOpen: true,
                dialogElementTitle: I18n.t(type),
                dialogOriginalElementTitle: '',
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
            if (e.id === id) {
                e.isOpen = isOpen;
            }
            return e;
        });
        this.props.onChangeProfiles(newProfiles);
    }

    onCloseAll = () => {
        const profiles = [...this.props.profiles];
        const newProfiles = profiles.map(e => {
            if (e.type === 'folder') {
                e.isOpen = false;
            }
            return e;
        });
        this.props.onChangeProfiles(newProfiles);
    }

    onOpenAll = () => {
        const profiles = [...this.props.profiles];
        const newProfiles = profiles.map(e => {
            if (e.type === 'folder') {
                e.isOpen = true;
            }
            return e;
        });
        this.props.onChangeProfiles(newProfiles);
    }

    folder = (fld, level) => {
        const { profiles, active } = this.props;
        const { flowMenuItem, editButton } = this.props.classes;
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
        const result = (
            <MenuItem
                className={`${flowMenuItem} flow-menu-item ${active === fld.id ? ' active ' : ''}`}
                style={{ marginLeft: (level * 12) }}
                disableRipple
            >
                <Typography variant="inherit" className="pl-1 w-100">
                    {folderSample}
                    {' '}
                    {I18n.t(fld.title)}
                </Typography>

                <div className="absolute-right">
                    <div
                        className={editButton}
                        title={I18n.t('Add new child profile')}
                        onClick={() => this.onAddChild(fld, 'profile')}
                    >
                        <AddIcon />
                    </div>
                    <div
                        className={editButton}
                        title={I18n.t('Add new child folder')}
                        onClick={() => this.onAddChild(fld, 'folder')}
                    >
                        <CreateNewFolderIcon />
                    </div>
                    <div
                        className={editButton}
                        title={I18n.t('Edit')}
                        onClick={() => this.onEditDialog(fld)}
                    >
                        <EditIcon />
                    </div>
                </div>

            </MenuItem>
        );

        return <div key={fld.id}>
            <FolderDrop folderData={fld} profiles={this.props.profiles}>
                <ProfileDrag onMoveItem={this.onMoveItem} profileData={fld}>
                    {result}
                </ProfileDrag>
            </FolderDrop>
            {subProfiles}
        </div>;
    }

    profile = (sub, level) => {
        const { active } = this.props;
        const { flowMenuItem, editButton } = this.props.classes;
        const result = (
            <MenuItem
                className={`${flowMenuItem} flow-menu-item sub ${active === sub.id ? ' active ' : ''}`}
                style={{ marginLeft: (level * 12) }}
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
                        className={editButton}
                        title={I18n.t('Edit')}
                        onClick={() => this.onEditDialog(sub)}
                    >
                        <EditIcon />
                    </div>
                </div>

            </MenuItem>
        );

        return <ProfileDrag onMoveItem={this.onMoveItem} profileData={sub}>{result}</ProfileDrag>;
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
        const result = this.state.isSearch
            ? (
                <>
                    <TextField
                        className="ml-1 w-100"
                        placeholder={I18n.t('search text')}
                        onChange={this.onSearchedText}
                    />
                    <IconButton
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
                        component="span"
                        size="small"
                        title={I18n.t('Add profile')}
                        onClick={
                            () => {
                                this.onAddChild({ id: '' }, 'profile');
                            }
                        }
                    >
                        <AddIcon />
                    </IconButton>
                    <IconButton
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
                            profiles.filter(e => e.type === 'folder' && e.isOpen).length > 0
                                ? (
                                    <IconButton
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
                        component="span"
                        size="small"
                        className={this.props.classes.searchIcon}
                        title={I18n.t('Search')}
                        onClick={this.onSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                </>
            );

        return <FolderDrop folderData={{ id: '' }} profiles={this.props.profiles}>
            {result}
        </FolderDrop>;
    }

    renderEditDeleteDialog() {
        const { isDialogOpen } = this.state;
        return <Dialog
            onClose={this.onDialog}
            open={isDialogOpen}
            maxWidth="sm"
            fullWidth
        >
            <IconButton
                onClick={this.onDialog}
                className={this.props.classes.closeButton}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle>
                {I18n.t('Edit')}
            </DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    label={I18n.t('Name')}
                    value={this.state.dialogElementTitle}
                    onChange={evt => this.setState({ dialogElementTitle: evt.target.value })}
                    InputProps={{
                        startAdornment:
                            <InputAdornment position="start">
                                <EditIcon />
                            </InputAdornment>,
                    }}
                />
            </DialogContent>
            <DialogActions>
                {
                    !this.state.isNew && <Button onClick={this.onDeleteItem} variant="outlined" startIcon={<DeleteIcon />}>
                        {I18n.t('Delete')}
                    </Button>
                }
                <Button
                    disabled={!this.state.dialogElementTitle || this.state.dialogElementTitle === this.state.dialogOriginalElementTitle}
                    onClick={this.onUpdateItem}
                    variant="contained"
                    color="primary"
                    startIcon={<CheckIcon />}
                >
                    {
                        I18n.t(
                            this.state.isNew
                                ? 'Create'
                                : 'Update',
                        )
                    }
                </Button>
            </DialogActions>
        </Dialog>;
    }

    render() {
        const { profiles } = this.props;
        const items = this.state.isSearch && this.state.searchText
            ? profiles
                .map(e => (e.title && e.title.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1
                    ? e.type === 'folder'
                        ? this.folder(e, 0)
                        : this.profile(e, 0)
                    : null))
            : profiles
                .filter(e => e.parent === '')
                .map(e => (e.type === 'folder' ? this.folder(e, 0) : this.profile(e, 0)));

        return (

            <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
                <div className={this.props.classes.scrolledAuto}>
                    <Paper className={this.props.classes.head}>
                        {this.head()}
                    </Paper>
                    <Divider />
                    <MenuList>
                        {items}
                    </MenuList>

                    {this.renderEditDeleteDialog()}
                </div>
            </DndProvider>
        );
    }
}

ProfilesPanel.propTypes = {
    active: PropTypes.any,
    profiles: PropTypes.array,
    onSelectProfile: PropTypes.func,
    onChangeProfiles: PropTypes.func,
    classes: PropTypes.object,
};
export default withStyles(styles)(ProfilesPanel);
