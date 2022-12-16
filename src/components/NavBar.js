/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
//import CustomBtn from './CustomBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import { Toolbar, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import NotificationIcon from '@material-ui/icons/NotificationImportant';
import WalletIcon from '@material-ui/icons/AccountBalanceWallet';

const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        '@media (max-width:780px)': {
            flexDirection: "column",
            // width: "50px",
        }
    },
    logo: {
        width: "15%",
        '@media (max-width:780px)': {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        '@media (max-width:780px)': {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        '@media (max-width:780px)': {
            paddingBottom: "1rem"
        }
    },
    iconButton: {
        color: 'inherit'
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            {/* <img src={logo} className={classes.logo} /> */}
            {/* <img src={logoMobile} className={classes.logoMobile} /> */}
            <Typography variant="h4" className={classes.logo}>
                SwiftPay
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Home
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Transfers
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Account
            </Typography>
            <IconButton className={classes.iconButton}>
                <NotificationIcon />
            </IconButton>
            <IconButton className={classes.iconButton}>
                <WalletIcon />
            </IconButton>
        </Toolbar>
    )
}

export default NavBar
