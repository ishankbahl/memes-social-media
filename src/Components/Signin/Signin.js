import React, { Components } from "react";
import Typography from "material-ui/Typography";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import { FormGroup, FormLabel, FormControl } from "material-ui/Form";
import Button from "material-ui/Button";

import { firebaseApp } from "../../firebase";

class Signin extends Component{

    constructor (props) {
        super (props);

        this.state = {
            email: "",
            password: "",
            error: {
                message: ""
            }
        };

        this.signin = this.signin.bind(this);

    }

    signin () {
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => this.setState({email}));
    } 

    render () {

        const { classes } = this.props;

        return (
            <div className={ classes.form } >
                <FormLabel htmlFor="signin">
                    <Typography type="display2" >&nbsp;Sign In</Typography>
                </FormLabel>
                <FormGroup id="signin" >
                    <FormControl>
                        <TextField
                            required
                            id="email"
                            label="Email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            className={classes.input}
                            fullWidth
                            marginForm
                        />
                        <br />
                        <TextField
                            required
                            id="password"
                            label="Password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                            className={ classes.input }
                            type="password"
                            fullWidth
                            marginForm
                        />
                        <br />
                    </FormControl>
                </FormGroup>
                <Button raised color="primary" className={ classes.button } onclick={ this.signin() } >
                    <Typography type="button" >&nbsp;Sign In</Typography>
                </Button>
            </div>
        );
    }
}

const styleSheet = theme => ({
    form: {
        position: "relative",
        left: '85%',
        transform: 'translateX(-50%)',
        marginTop: 50,
    },
    button: {
        marginTop: 25,
    },
    input: {
        width: 400,
    }
});

export default withStyles(styleSheet)(Signin);