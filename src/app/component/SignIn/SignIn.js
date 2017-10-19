/**
 * Created by devollove9 on 2017/10/18.
 */

import React, { Component } from "react";
//import loadStyle from "../../library/loadStyle";
//import message from "./SignUp.i18n.js";
//import styles from "./SignUp.scss";
import { bindMethods } from "../../util/commonUtils";
//import routerNavigation from "../../library/routerNavigation.js";
//import routerState from "../../library/routerState.js";

//@loadStyle(styles)
//@i18n(message)
//@routerNavigation
//@routerState
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        bindMethods(this, "submitSignIn", "checkPassword", "checkUsername");
    }

    submitSignIn() {}

    checkPassword() {}

    checkUsername() {}

    render() {
        return (
            <div className="SignIp">
                This is Sign In
            </div>
        )
    }
}

export default SignIn;
