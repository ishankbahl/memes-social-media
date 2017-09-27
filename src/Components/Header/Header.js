import React, { Component } from "react";
import { withStyles, createStyleSheet } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Button from "material-ui/Button";
import Home from "material-ui-icons/Home";
import Typography from "material-ui/Typography";

import colors from "../../colors";

class Header extends Component {

    constructor (props) {
        super (props);

        this.changeUrl = this.changeUrl.bind(this);
    }

    changeUrl (url) {
        this.props.history.push(url);
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
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const styleSheet = createStyleSheet("Header", {
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
});

export default withStyles(styleSheet)(Header);