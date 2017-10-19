/**
 * Created by devollove9 on 2017/10/1.
 */
import React, { Component } from 'react'; 

let count = 0;

function loadStyle(styles) {
    return ( ComposedComponent ) => class loadStyle extends Component {

        constructor(props) {
            super(props);
            this.refCount = 0;
            ComposedComponent.prototype.renderCss = function(css) {
               
                let style;
                if(this.styleId && (style = document.getElementById(this.styleId))) {
                    if('textContent' in style) {
                        style.textContent = css;
                    } else {
                        style.styleSheet.cssText = css;
                    }
                } else {
                    this.styleId = `dynamic-css-${count++}`;
                    style = document.createElement('style');
                    style.setAttribute('id', this.styleId);
                    style.setAttribute('type', 'text/css');

                    if('textContent' in style) {
                        style.textContent = css;
                    } else {
                        style.styleSheet.cssText = css;
                    }

                    document.getElementsByTagName('head')[0].appendChild(style);
                    this.refCount++;
                }
            }.bind(this);
        }

        componentWillMount() {
            styles.use();
        }

        componentWillUnmount() {
            styles.unuse();
            if(this.styleId) {
                this.refCount--;
                if(this.refCount < 1) {
                    let style = document.getElementById(this.styleId);
                    if(style) {
                        style.parentNode.removeChild(style);
                    }
                }
            }
        }

        render() {
            return <ComposedComponent {...this.props} />;
        }
    };
}
export { loadStyle }
export default loadStyle;