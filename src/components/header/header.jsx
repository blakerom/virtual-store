import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { goHome } from '../../store/nav.js';
import CartPopper from '../cart/cart-popper.jsx';

const useStyles = makeStyles((theme) => ({

    root: {

        flexGrow: 1,

    },

    menuButton: {

        marginRight: theme.spacing(2),

    },


    title: {

        flexGrow: 1,
        cursor: 'pointer',

    },

    typography: {

        padding: theme.spacing(2),

    },

}));


function Header(props) {

    const classes = useStyles();

    return (
        <header>
            <AppBar position='static'>
                <Toolbar>
                    <Typography
                        variant='h3'
                        className={classes.title}
                        onClick={props.goHome}>
                        Virtual Store
                    </Typography>
                    <CartPopper />
                </Toolbar>
            </AppBar>
        </header>
    )
}

const mapStateToProps = state => ({});

const mapDispatchToProps = { goHome };

export default connect(mapStateToProps, mapDispatchToProps)(Header)
