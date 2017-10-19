/**
 * Created by devo on 10/3/2017.
 */
import React from "react";
import i18n from "../../library/i18n";
import loadStyle from "../../library/loadStyle";
import message from "./SignUp.i18n";
import styles from "./SignUp.scss";
import { bindMethods } from "../../util/commonUtils";
import routerNavigation from "../../library/routerNavigation.js";
import routerState from "../../library/routerState.js";

@loadStyle(styles)
@i18n(message)
@routerNavigation
@routerState
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        bindMethods(this, "submitSignUp", "checkPassword", "checkUsername");
    }

    submitSignUp() {}

    checkPassword() {}

    checkUsername() {}

    render() {
        return (
            <div className="SignUp">

            </div>
        )
    }
}

export default SignUp;
