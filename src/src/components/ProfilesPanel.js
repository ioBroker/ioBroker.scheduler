import React, { Component, useEffect } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { getEmptyImage, HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { usePreview } from 'react-dnd-preview';

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
    Toolbar,
    DialogContent, DialogActions,
    Checkbox, Tooltip, Box,
} from '@mui/material';

import {
    Edit as EditIcon,
    Add as AddIcon,
    FileCopy as FileCopyIcon,
    CreateNewFolder as CreateNewFolderIcon,
    Search as SearchIcon,
    Schedule as ScheduleIcon,
    UnfoldLess as UnfoldLessIcon,
    UnfoldMore as UnfoldMoreIcon,
    Close as CloseIcon,
    Delete as DeleteIcon,
    Check as CheckIcon,
} from '@mui/icons-material';

import {
    I18n,
    IconClosed as FolderIcon,
    IconOpen as FolderOpenIcon,
} from '@iobroker/adapter-react-v5';

const defaultProfileData = {
    enabled: true,
    members: [],
    type: 'temperature',
    prio: 0, // 0 - normal, 1 - high, 2 - highest
    dow: [1, 2, 3, 4, 5], // 0 - sunday, 1 - monday
    intervalDuration: 1, // in hours
    intervals: Array(24).fill(22),
    ignoreSameValues: false,
    doNotWriteSameValue: false,
};

// eslint-disable-next-line
const DndPreview = () => {
    const { display/* , itemType */, item, style } = usePreview();
    if (!display) {
        return null;
    }
    return <div style={{ zIndex: 10000, ...style }}>{item.preview}</div>;
};

function isTouchDevice() {
    return 'ontouchstart' in window
        // || (navigator.maxTouchPoints > 0)
        || navigator.msMaxTouchPoints;
}

const styles = {
    closeButton: {
        position: 'absolute',
        top: 5,
        right: 5,
    },
    scrolledAuto: {
        overflowX: 'hidden',
        overflowY: 'auto',
        flexGrow: 1000,
        width: '100%',
        padding: '0 10px',
        margin: 0,
    },
    editButton: {
        width: 30,
        height: 30,
        display: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        mr: '2px',
        '&:active': {
            color: '#EEE',
        },
        '&>svg': {
            fontSize: '1.2rem',
        },
        '.flow-menu-item:hover &': {
            display: 'flex',
        },
        '.flow-menu-item.active &': {
            display: 'flex',
        },
    },
    tooltip: {
        pointerEvents: 'none',
    },
    dndHover: theme => ({
        backgroundColor: () => theme.palette.primary.dark,
        color: theme.palette.grey[200],
    }),
    flowMenuItem: theme => ({
        height: 28,
        maxHeight: 28,
        minHeight: 28,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative',
        color: theme.palette.text.primary,
        '&.active': {
            backgroundColor: () => theme.palette.primary.light,
            color: '#FFF',
        },
        '&:hover': {
            backgroundColor: () => theme.palette.primary.dark,
            color: theme.palette.grey[200],
        },
        '&::before': {
            width: 20,
            height: 20,
        },
    }),
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
    searchIcon: {
        marginLeft: 'auto',
    },
    folderIcon: {
        paddingRight: 4,
    },
    scheduleIcon: {
        paddingRight: 4,
        width: 16,
        height: 16,
        marginTop: 4,
    }
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

// eslint-disable-next-line
const ProfileDrag = props => {
    const [, dragRef, preview] = useDrag(
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

    useEffect(() => {
        preview(getEmptyImage(), { captureDraggingState: true });
    }, [preview]);

    return <div ref={dragRef}>
        {props.children}
    </div>;
};

function sortItems(a, b) {
    // folders first
    if (a.type === 'folder' && b.type !== 'folder') {
        return -1;
    }

    if (a.type !== 'folder' && b.type === 'folder') {
        return 1;
    }

    return a.title > b.title ? 1 : (a.title < b.title ? -1 : 0);
}

// eslint-disable-next-line
const FolderDrop = props => {
    const [{ isOver, CanDrop }, drop] = useDrop(() => ({
        accept: 'profile',
        drop: () => ({ folderId: props.folderData.id }),
        canDrop: (item, monitor) => canDrop(monitor.getItem().profileId, props.folderData.id, props.profiles),
        collect: monitor => ({
            isOver: monitor.isOver(),
            CanDrop: monitor.canDrop(),
        }),
    }), [props.profiles]);

    return <Box
        ref={drop}
        sx={CanDrop && isOver ? styles.dndHover : undefined}
    >
        {props.children}
    </Box>;
};

class ProfilesPanel extends Component {
    constructor(props) {
        super(props);
        let collapsed = window.localStorage.getItem('scheduler.collapsed') || '[]';
        try {
            collapsed = JSON.parse(collapsed);
        } catch (e) {
            collapsed = [];
        }

        this.state = {
            isDialogOpen: false,
            isSearch: false,
            searchText: '',
            collapsed,
            states: {},
        };

        this.subscribedIDs = [];

        this.isTouchDevice = isTouchDevice();
    }

    onActive = id => {
        this.props.onSelectProfile(id);
    }

    componentWillUnmount() {
        this.stateTimeout && clearTimeout(this.stateTimeout);
        this.stateTimeout = null;
        this.subscribedIDs.length && this.props.socket.unsubscribeState(this.subscribedIDs, this.onEnabled);
    }

    onEnabled = (id, state) => {
        if (this.subscribedIDs.includes(id)) {
            this.newStates = this.newStates || JSON.parse(JSON.stringify(this.state.states));
            if (this.newStates[id] !== !!state?.val) {
                this.newStates[id] = !!state?.val;
                this.stateTimeout && clearTimeout(this.stateTimeout);
                this.stateTimeout = setTimeout(() => {
                    this.stateTimeout = null;
                    const states = this.newStates;
                    this.newStates = null;
                    this.setState({ states });
                }, 200);
            }
        }
    }

    getStatesToSubscribe() {
        const states = [];
        for (let i = 0; i < this.props.profiles.length; i++) {
            const profile = this.props.profiles[i];
            const id = profile.data.state === true ? this.props.getStateId(profile, this.props.profiles) : profile.data.state;
            if (id) {
                states.push(id);
            }
        }
        states.sort();
        return states;
    }

    updateStates() {
        const newStates = this.getStatesToSubscribe();
        if (JSON.stringify(newStates) !== JSON.stringify(this.subscribedIDs)) {
            const toSubscribe = [];
            newStates.forEach(id => !this.subscribedIDs.includes(id) && toSubscribe.push(id));
            toSubscribe.length && this.props.socket.subscribeState(toSubscribe, this.onEnabled)
                .catch(e => console.error('Cannot subscribe: ' + e));

            const toUnsubscribe = [];
            this.subscribedIDs.forEach(id => !newStates.includes(id) && toUnsubscribe.push(id));
            toUnsubscribe.length && this.props.socket.unsubscribeState(toUnsubscribe, this.onEnabled);
            this.subscribedIDs = newStates;
        }
    }

    onDialogClose = () => {
        this.setState({
            isDialogOpen: false,
            dialogElementTitle: '',
            dialogElementId: '',
            dialogElementParent: null,
            duplicate: false,
            isNew: false,
        });
    }

    onEditDialog = element => {
        this.setState(
            {
                isDialogOpen: true,
                dialogElementTitle: element.title,
                dialogElementId: element.id,
                dialogElementParent: element.parent,
                dialogElementType: element.type,
                isNew: false,
            },
        );
    }

    onUpdateItem = () => {
        const newProfiles = JSON.parse(JSON.stringify(this.props.profiles));
        const activeProfile = this.state.dialogElementId;
        if (this.state.isNew) {
            newProfiles.push({
                id: this.state.dialogElementId,
                title: this.state.dialogElementTitle,
                parent: this.state.dialogElementParent,
                type: this.state.dialogElementType,
                data: { state: true, ...defaultProfileData },
            });
        } else if (this.state.duplicate) {
            const newProfile = JSON.parse(JSON.stringify(newProfiles.find(foundProfile => foundProfile.id === this.state.duplicate)));
            newProfile.id = this.state.dialogElementId;
            newProfile.title = this.state.dialogElementTitle;
            newProfiles.push(newProfile);
        } else {
            const profile = newProfiles.find(foundProfile => foundProfile.id === this.state.dialogElementId);
            profile.title = this.state.dialogElementTitle;
        }

        this.setState({ isDialogOpen: false, isNew: false });
        this.props.onChangeProfiles(newProfiles, activeProfile);
    }

    removeItem(profiles, id) {
        profiles.forEach(e => {
            if (e.id === id) {
                e.toDelete = true;
                // remove all kids
                profiles.forEach(ee => {
                    if (e.id === ee.parent) {
                        this.removeItem(profiles, ee.id);
                    }
                });
            }
        });
    }

    onDeleteItem = () => {
        const profiles = JSON.parse(JSON.stringify(this.props.profiles));
        this.removeItem(profiles, this.state.dialogElementId);
        const newProfiles = [];

        profiles.forEach(e => {
            if (!e.toDelete) {
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
        // check name
        if (newProfiles
            .filter(item => item !== profile)
            .filter(item => ((!profile.parent && !item.parent) || profile.parent === item.parent))
            .find(item => item.title === profile.title)) {
            profile.title += ` (${I18n.t('copy')})`;
        }

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

    onDuplicate = source => {
        this.setState(
            {
                isDialogOpen: true,
                dialogElementTitle: `${source.title} ${I18n.t('copy')}`,
                dialogElementType: source.type,
                dialogElementId: uuidv4(),
                dialogElementParent: source.parent,
                duplicate: source.id,
                isNew: false,
            },
        );
    }

    onOpen = id => {
        const collapsed = [...this.state.collapsed];
        const pos = collapsed.indexOf(id);
        if (pos === -1) {
            collapsed.push(id);
            collapsed.sort();
        } else {
            collapsed.splice(pos, 1);
        }
        window.localStorage.setItem('scheduler.collapsed', JSON.stringify(collapsed));
        this.setState({ collapsed });
    }

    onCloseAll = () => {
        const collapsed = this.props.profiles.filter(item => item.type === 'folder').map(item => item.id);
        window.localStorage.setItem('scheduler.collapsed', JSON.stringify(collapsed));
        this.setState({ collapsed });
    }

    onOpenAll = () => {
        window.localStorage.removeItem('scheduler.collapsed');
        this.setState({ collapsed: [] });
    }

    renderFolder = (folderItem, level, searchText) => {
        const { profiles, active } = this.props;

        const isOpen = !this.state.collapsed.includes(folderItem.id);

        const subProfiles = searchText ? null : profiles
            .filter(e => e.parent === folderItem.id)
            .sort(sortItems)
            .map(sub => isOpen ? <div key={sub.id}>
                {sub.type === 'profile'
                    ? this.renderProfile(sub, level + 1, searchText)
                    : this.renderFolder(sub, level + 1, searchText)}
                </div> : null);

        const folderSample = isOpen ? <FolderOpenIcon
                style={styles.folderIcon}
                onClick={e => {
                    this.onOpen(folderItem.id, false);
                    e.stopPropagation();
                }}
            />
            : <FolderIcon
                style={styles.folderIcon}
                onClick={e => {
                    this.onOpen(folderItem.id, true);
                    e.stopPropagation();
                }}
            />;

        const result = <MenuItem
            sx={styles.flowMenuItem}
            className={`flow-menu-item ${active === folderItem.id ? ' active ' : ''}`}
            style={{ marginLeft: (level * 12) }}
            disableRipple
        >
            <Typography variant="inherit" className="pl-1 w-100">
                {folderSample}
                {' '}
                {folderItem.title}
            </Typography>

            <div className="absolute-right">
                <Box
                    sx={styles.editButton}
                    title={I18n.t('Add new child profile')}
                    onClick={() => this.onAddChild(folderItem, 'profile')}
                >
                    <AddIcon />
                </Box>
                <Box
                    sx={styles.editButton}
                    title={I18n.t('Add new child folder')}
                    onClick={() => this.onAddChild(folderItem, 'folder')}
                >
                    <CreateNewFolderIcon />
                </Box>
                <Box
                    sx={styles.editButton}
                    title={I18n.t('Edit')}
                    onClick={() => this.onEditDialog(folderItem)}
                >
                    <EditIcon />
                </Box>
            </div>

        </MenuItem>;

        return <div key={folderItem.id}>
            <FolderDrop
                folderData={folderItem}
                profiles={this.props.profiles}
            >
                <ProfileDrag onMoveItem={this.onMoveItem} profileData={folderItem}>
                    {result}
                </ProfileDrag>
            </FolderDrop>
            {subProfiles}
        </div>;
    }

    renderProfile = (profile, level, searchText) => {
        const { active } = this.props;

        const stateId = profile.data.state === true ? this.props.getStateId(profile, this.props.profiles) : profile.data.state;

        const result = <MenuItem
            sx={styles.flowMenuItem}
            className={`flow-menu-item sub ${active === profile.id ? ' active ' : ''}`}
            style={{ marginLeft: level * 12 }}
            onClick={() => this.onActive(profile.id)}
            disableRipple
        >
            <Typography variant="inherit" className="pl-1 w-100">
                <ScheduleIcon style={styles.scheduleIcon} />
                <Tooltip
                    componentsProps={{ popper: { sx: styles.tooltip } }}
                    title={typeof profile.data.state === 'boolean' ?
                        (profile.data.enabled ? I18n.t('Enabled') : I18n.t('Disabled')) :
                        I18n.t('You cannot enable or disable this profile as it controlled by %s state', profile.data.state)}
                >
                    <span>
                        <Checkbox
                            color="default"
                            disabled={!stateId || (profile.data.state !== true && profile.data.state !== false)}
                            style={{ padding: 0, opacity: typeof profile.data.state === 'boolean' ? 1 : 0.3 }}
                            size="small"
                            onMouseDown={async e => {
                                e.stopPropagation();
                                await this.props.socket.setState(stateId, !this.state.states[stateId]);
                            }}
                            checked={!!this.state.states[stateId]}
                        />
                    </span>
                </Tooltip>
                {profile.title}
                {profile.parent && searchText ? ` [${this.props.profiles.find(i => i.id === profile.parent).title}]` : ''}
                {profile.data.prio === 1 ? <Tooltip title={I18n.t('High priority')}><span>&#8593;</span></Tooltip> : ''}
                {profile.data.prio === 2 ? <Tooltip title={I18n.t('Highest priority')}><span>&#8593;&#8593;</span></Tooltip> : ''}
            </Typography>

            <div className="absolute-right">
                <Box
                    sx={styles.editButton}
                    title={I18n.t('Edit')}
                    onClick={e => {
                        e.stopPropagation();
                        this.onEditDialog(profile);
                    }}
                >
                    <EditIcon />
                </Box>
                <Box
                    sx={styles.editButton}
                    title={I18n.t('Duplicate')}
                    onClick={e => {
                        e.stopPropagation();
                        this.onDuplicate(profile);
                    }}
                >
                    <FileCopyIcon />
                </Box>
            </div>
        </MenuItem>;

        return <ProfileDrag key={profile.id} onMoveItem={this.onMoveItem} profileData={profile}>{result}</ProfileDrag>;
    }

    onSearch = () => {
        this.setState({ isSearch: !this.state.isSearch, searchText: '' });
    }

    onSearchedText = evt => {
        const text = evt.target.value;
        this.setState({ searchText: text });
    }

    renderHead = () => {
        const { profiles } = this.props;
        const result = this.state.isSearch
            ? <TextField
                variant="standard"
                className="ml-1 w-100"
                placeholder={I18n.t('search text')}
                onChange={this.onSearchedText}
                InputProps={{
                    endAdornment:
                        <IconButton
                            component="span"
                            size="small"
                            title={I18n.t('finish searching')}
                            onClick={this.onSearch}
                        >
                            <CloseIcon />
                        </IconButton>,
                }}
            />
            : <>
                <IconButton
                    component="span"
                    size="small"
                    title={I18n.t('Add profile')}
                    onClick={() => this.onAddChild({ id: '' }, 'profile')}
                >
                    <AddIcon />
                </IconButton>
                <IconButton
                    component="span"
                    size="small"
                    title={I18n.t('Add folder')}
                    onClick={() => this.onAddChild({ id: '' }, 'folder')}
                >
                    <CreateNewFolderIcon />
                </IconButton>
                {
                    profiles.length ? (
                        profiles.filter(e => e.type === 'folder' && !this.state.collapsed.includes(e.id)).length
                            ? <IconButton
                                component="span"
                                size="small"
                                title={I18n.t('Close all')}
                                onClick={this.onCloseAll}
                            >
                                <UnfoldLessIcon />
                            </IconButton>
                            : <IconButton
                                component="span"
                                size="small"
                                title={I18n.t('Open all')}
                                onClick={this.onOpenAll}
                            >
                                <UnfoldMoreIcon />
                            </IconButton>
                    ) : null
                }
                <IconButton
                    component="span"
                    size="small"
                    style={styles.searchIcon}
                    title={I18n.t('Search')}
                    onClick={this.onSearch}
                >
                    <SearchIcon />
                </IconButton>
            </>;

        return <FolderDrop folderData={{ id: '' }} profiles={this.props.profiles}>
            {result}
        </FolderDrop>;
    }

    renderEditDeleteDialog() {
        if (!this.state.isDialogOpen) {
            return null;
        }
        const folderItems = this.props.profiles.filter(profile =>
            (!this.state.dialogElementParent && !profile.parent) || this.state.dialogElementParent === profile.parent);

        const canSubmit = this.state.dialogElementTitle
            && !folderItems.find(profile => profile.title === this.state.dialogElementTitle);

        const originalTitle = folderItems.find(p => p.id === this.state.dialogElementId)?.title;

        return <Dialog
            onClose={() => this.onDialogClose()}
            open={!0}
            onKeyDown={e => e.key === 'Enter' && canSubmit && this.onUpdateItem()}
            maxWidth="sm"
            fullWidth
        >
            <IconButton
                onClick={() => this.onDialogClose()}
                style={styles.closeButton}
            >
                <CloseIcon />
            </IconButton>
            <DialogTitle>
                {I18n.t(`${this.state.duplicate ? 'Duplicate' : (this.state.isNew ? 'Add' : 'Edit')} ${this.state.dialogElementType === 'folder' ? 'folder' : 'profile'}`)}
            </DialogTitle>
            <DialogContent>
                <TextField
                    variant="standard"
                    autoFocus
                    fullWidth
                    error={!canSubmit && originalTitle !== this.state.dialogElementTitle}
                    helperText={canSubmit && originalTitle !== this.state.dialogElementTitle ? '' : I18n.t('Name is not unique')}
                    label={I18n.t('Name')}
                    value={this.state.dialogElementTitle}
                    onChange={evt => this.setState({ dialogElementTitle: evt.target.value })}
                    onKeyDown={e => e.keyCode === 13 && canSubmit && this.onUpdateItem()}
                    InputProps={{
                        startAdornment:
                            <InputAdornment position="start">
                                <EditIcon />
                            </InputAdornment>,
                    }}
                />
            </DialogContent>
            <DialogActions>
                {!this.state.isNew && <Button style={{ color: '#FF8080' }} onClick={this.onDeleteItem} variant="outlined" startIcon={<DeleteIcon />}>
                    {I18n.t('Delete')}
                </Button>}
                <Button
                    disabled={!canSubmit}
                    onClick={this.onUpdateItem}
                    variant="contained"
                    color="primary"
                    startIcon={<CheckIcon />}
                >
                    {I18n.t(this.state.isNew ? 'Create' : (this.state.duplicate ? 'Copy' : 'Update'))}
                </Button>
                <Button
                    onClick={() => this.onDialogClose()}
                    variant="contained"
                    color="grey"
                    startIcon={<CloseIcon />}
                >
                    {I18n.t('Cancel')}
                </Button>
            </DialogActions>
        </Dialog>;
    }

    render() {
        const { profiles } = this.props;
        const searchText = ((this.state.isSearch && this.state.searchText) || '').toLowerCase();

        this.updateStates();

        const items = (
            searchText ? profiles.filter(e => !searchText || (e.title && e.title.toLowerCase().includes(searchText)))
                : profiles.filter(e => e.parent === '')
        )
            .sort(sortItems)
            .map(e => (e.type === 'folder' ? this.renderFolder(e, 0, searchText) : this.renderProfile(e, 0, searchText)));

        return <DndProvider backend={this.isTouchDevice ? TouchBackend : HTML5Backend}>
            <DndPreview />
            <div style={styles.scrolledAuto}>
                <Toolbar variant="dense" disableGutters>
                    {this.renderHead()}
                </Toolbar>
                <Divider />
                <MenuList>
                    {items}
                </MenuList>
                {this.renderEditDeleteDialog()}
            </div>
        </DndProvider>;
    }
}

ProfilesPanel.propTypes = {
    active: PropTypes.any,
    profiles: PropTypes.array,
    onSelectProfile: PropTypes.func,
    onChangeProfiles: PropTypes.func,
    getStateId: PropTypes.func,
    socket: PropTypes.object,
};

export default ProfilesPanel;
