/**
 * Created by devollove9 on 2017/10/2.
 */
import React, {PropTypes, Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import loadStyles from '../../library/loadStyle.js';
import Foundation from '../../library/foundation.js';
import {bindMethods} from '../../util/commonUtils.js';
import styles from './NavigationItem.scss';

@loadStyles(styles)
@Foundation
class NavigationBarItem extends Component {

    static propTypes = {
        dropDownId: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        data: PropTypes.array.isRequired
    };

    constructor(props){
        super(props);
        bindMethods(this, 'closeNavigationBar');
    }

    closeNavigationBar() {
        $(ReactDOM.findDOMNode(this)).foundation('dropdown', 'close', $('#' + this.props.dropDownId));
    }

    render() {
        const {dropDownId, icon, children} = this.props;
        return (
            <div className="NavigationBarItem">
                <a className="active-link" data-dropdown={dropDownId} aria-controls={dropDownId}>
                    <i className={"fa "+ icon}></i>
                    <span className={"active-name active-" + dropDownId}  title={children}>{children}</span>
                    <i className="fa fa-angle-down dropdown-angle"></i>
                </a>
                <ul className="navigation-content f-dropdown" id={dropDownId}  data-dropdown-content aria-hidden="true" tabIndex="-1">
                    {this.props.data}
                </ul>
            </div>
        );
    }
}

export default NavigationBarItem;