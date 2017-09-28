import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Home from "material-ui-icons/Home";
import Typography from "material-ui/Typography";

import colors from "../../colors";
import { firebaseApp } from "../../firebase";

class Header extends Component {

    constructor (props) {
        super (props);

        this.changeUrl = this.changeUrl.bind(this);
        this.checkUserStatus = this.checkUserStatus.bind(this);
        this.signOut =  this.signOut.bind(this);

    }

    signOut () {
        firebaseApp.auth().signOut();
    }

    changeUrl (url) {
        this.props.history.push(url);
    }

    checkUserStatus () {
        if (this.props.state.email) {
            return [
                <Button onClick={ () => { this.changeUrl("/signup") } } >
                    <Typography type="caption" className={ classes.settings } >&nbsp;Sign Up</Typography>
                </Button>,
                <Button onClick={ () => { this.changeUrl("/signin") } } >
                    <Typography type="caption" className={ classes.settings } >&nbsp;Sign In</Typography>
                </Button>
            ];
        }
        else {
            return (
                <Button onClick={ signOut } >
                    <Typography type="caption" className={ classes.settings } >&nbsp;Log Out</Typography>
                </Button>
            );
        }
    }

    render () {

        const { classes } = this.props;

        return (
            <div className={ classes.root } >
                <AppBar position="static" className={ classes.header } >
                    <Toolbar className={ classes.bar } >
                        <Button onClick={ () => this.changeUrl("/home") }>
                            <Home className={ classes.icon } aria-label="home" />
                            <Typography type="caption" className={ classes.settings } >
                                &nbsp;Home
                            </Typography>
                        </Button>
                        <div className={ classes.flex } ></div>
                        { this.checkUserStatus() }
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const styleSheet = theme => ({
    root: {
        width: "100%",
    },
    bar: {
        height: 70,
    },
    header: {
        backgroundColor: colors.blue,
    },
    icon: {
        height: 27,
        width: 27,
        color: colors.white,
    },
    flex: {
        flex: 1,
    },
    settings: {
        color: colors.white,
        fontSize: 19,
        textTransform: "capitalize",
    }
});

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
}

function mapStateToProps (state) {
    const { email } = state;
    return {
        email,
    };
}

export default withRouter(connect(mapStateToProps)(null)(withStyles(styleSheet)(Header)));