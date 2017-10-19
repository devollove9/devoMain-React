/**
 * Created by devollove9 on 2017/10/2.
 */
import React, {PropTypes, Component} from 'react';
import { FormattedMessage } from 'react-intl';

import i18n from '../../library/i18n.js';
import loadStyle from '../../library/loadStyle.js';

import styles from './Navigation.scss';
import {Link} from 'react-router';
import { bindMethods } from '../../util/commonUtils.js';
import NavigationItem from '../NavigationItem/NavigationItem.js';
//import RouterState from '../../library/routerState';

import {USER_ID, USER_ROLE } from '../../constant/cookieNames.js';


@loadStyle(styles)
//@RouterState
class NavigationBar extends Component {

    constructor(props){
        super(props);
        this.state ={
            regions: [],
            stores: [],
            activeRegion: '',
            activeStore: ''
        };
        //bindMethods(this, 'getAllRegions', 'getRegionInfo');
    }

    render() {
        return (
            <div className="Navigation"></div>
        );
    }
}

export default NavigationBar;