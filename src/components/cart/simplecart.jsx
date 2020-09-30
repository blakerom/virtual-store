import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { If, Then, Else } from 'react-if';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { decrementCart } from '../../store/cart.js';
import { changeActiveItem } from '../../store/products.js';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 400,
        minWidth: 300,
        backgroundColor: theme.palette.background.paper,
    },
}));

function SimpleCart(props) {
    const classes = useStyles();

    const styles = {

        checkoutButton: {

            textAlign: 'center',
            margin: '5px',

        },


        link: {

            'textDecoration': 'none'

        }

    }

    return (
        <div className={classes.root}>
            <List component="nav">
                <If condition={props.cart.cartList.length > 0}>
                    <Then>
                        {props.cart.cartList.map(item => {

                            return (

                                <ListItem key={item.name}>
                                    <Link
                                        to='/details'
                                        style={styles.link}
                                        onClick={() => { props.changeActiveItem(item) }}>
                                        <ListItemText>
                                            {item.name}
                                        </ListItemText>
                                    </Link>
                                    <Button onClick={() => { props.decrementCart(item) }}>
                                        X
                                    </Button>
                                </ListItem>

                            )

                        })}
                        <Divider />
                        <div style={styles.checkoutButton}>
                            <Link to='/checkout' style={styles.link}>
                                <Button variant="contained" color="primary">
                                    Proceed to Checkout
                                </Button>
                            </Link>
                        </div>
                    </Then>
                    <Else>
                        <ListItem>
                            <ListItemText>
                                Your Cart is Empty!
                            </ListItemText>
                        </ListItem>
                    </Else>
                </If>
            </List>
        </div>
    );
}


const mapStateToProps = (state) => ({
    cart: state.cart,
})

const mapDispatchToProps = { decrementCart, changeActiveItem }

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)
