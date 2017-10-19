/**
 * Created by devollove9 on 2017/10/2.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {noop} from 'lodash';
import $ from 'jquery';

/**
 * @decorator Foundation
 * @description Make Foundation JavaScript components enable in React Component.
 */
const foundation = (Component) => {

    let $componentDidMount = Component.prototype.componentDidMount;
    let $componentDidUpdate = Component.prototype.componentDidUpdate;

    Object.assign(Component.prototype, {
        componentDidMount() {
            ($componentDidMount || noop).apply(this, arguments);
                console.log( ReactDOM.findDOMNode(this));
            console.log( this );
            console.log( $(ReactDOM.findDOMNode(this)) )
            $(ReactDOM.findDOMNode(this)).foundation();
        },

        componentDidUpdate() {
            ($componentDidUpdate || noop).apply(this, arguments);
            $(ReactDOM.findDOMNode(this)).foundation();
        }
    });

    return Component;
};


export default foundation;