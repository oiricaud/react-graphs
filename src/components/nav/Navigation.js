import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import {Route, NavLink } from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import Switch from '@material-ui/core/Switch';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function Navigation() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [state, setState] = React.useState({
        barChart: true,
        pieChart: true,
    });

    const barChartChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    const pieChartChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    let activePage = 'Home';

    function handleDrawerOpen() {
        setOpen(true);
    }

    function homeClicked() {
        activePage = 'Home';
    }
    function settingsClicked() {
        activePage = 'Settings';
    }
    function handleDrawerClose() {
        setOpen(false);
    }

    function pieChartSelected(val) {
        console.log('this.pieChartSeleced ' + val);
    }
    function barChartSelected() {
        console.log('this.barChartSelected');
    }
    return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" className={clsx(classes.appBar, {[classes.appBarShift]: open})}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}
                                    edge="start" className={clsx(classes.menuButton, open && classes.hide)}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Navigation
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper: classes.drawerPaper}}>
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>
                    </div>
                    <Divider/>

                    <NavLink className="nav-link" exact to='/home'  style={{ textDecoration: 'none' }}>
                        <List> {['Home'].map((text, index) => (
                            <ListItem onClick={homeClicked()} button key={text}>
                                <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
                                <ListItemText primary={text}/>
                            </ListItem>
                            ))}
                        </List>
                    </NavLink>

                    <Divider/>
                    <NavLink  className="nav-link" exact to='/settings'  style={{ textDecoration: 'none' }}>
                        <List>
                            {['Settings'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>{index % 2 === 0 ? <SettingsIcon/> : <SettingsIcon/>}</ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}
                        </List>
                    </NavLink>
                </Drawer>
                <main className={clsx(classes.content, {[classes.contentShift]: open})}>
                    <div className={classes.drawerHeader}/>
                    <Route exact path='/home' render={() =>
                        <Dashboard barChartState={state.barChart} pieChartState={state.pieChart}>  </Dashboard>} />
                    <Route exact path='/settings' render={() =>
                            <div>
                                <div>
                                    <h1>Settings </h1>
                                </div>
                                <h3>
                                    Bar Chart
                                </h3>
                                <Switch
                                    checked={state.barChart}
                                    onChange={barChartChange('barChart')}
                                    value="barChart"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                />
                                <h3>
                                    Pie Chart
                                </h3>
                                <Switch
                                    checked={state.pieChart}
                                    onChange={pieChartChange('pieChart')}
                                    value="pieChart"
                                    color="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                    }
                    />
                </main>
            </div>
        );
}