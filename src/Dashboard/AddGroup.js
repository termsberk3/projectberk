import React from 'react';
import clsx from 'clsx';
import { fade,makeStyles, useTheme } from '@material-ui/core/styles';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import MainPage from "./MainPage";
import {Helmet} from "react-helmet";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar:{
        background: "#22228F"
    },
    title :{
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        marginTop :"150px",
        alignItems : "center",
        justifyContent: 'center',
        display : "flex",
        textAlign : "center",
        position: 'relative',
        flexDirection : "column",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
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
        // necessary for content to be below app bar
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

export default function AddGroup() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const menuOpen = Boolean(anchorEl);



    return (
        <div className={classes.root}>
            <MainPage/>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Group</title>
            </Helmet>
        <main
            className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}
        >
            <div className={classes.drawerHeader} />
            <div className="Login">
                <header className="Login-header">
                    <FormControl className="form">
                        <InputLabel htmlFor="my-input">Group Name</InputLabel>
                        <Input type={"text"} id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl  className="form">
                        <InputLabel htmlFor="my-input">User Name</InputLabel>
                        <Input type={"text"} id="my-input" aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl  className="form">
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input  id="my-input" type={"password"} aria-describedby="my-helper-text" />
                    </FormControl>
                    <FormControl  className="form">
                        <InputLabel htmlFor="my-input">E-mail</InputLabel>
                        <Input  id="my-input" type={"text"} aria-describedby="my-helper-text" />
                    </FormControl>
                    <br/>
                    <div id="container">
                        <div>
                            <Button className="button"> Add Group </Button>
                        </div>
                    </div>
                </header>
            </div>
        </main>
        </div>
    )
}