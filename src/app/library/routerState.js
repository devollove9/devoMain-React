/**
 * Created by devollove9 on 2017/10/1.
 */
import { Component } from 'react';

function RouterState() {
    return (ComposedComponent) => class routerState extends Component {
        routerEnter(router, nextState, route) {
            if(this.refs.component && this.refs.component.routerEnter) {
                this.refs.component.routerEnter(router, nextState, route);
            }
        }

        routerLeave(router, nextState, route) {
            if(this.refs.component && this.refs.component.routerLeave) {
                this.refs.component.routerLeave(router, nextState, route);
            }
        }

        render() {
            let stateMixinApi = {
                getPath: this.getPath,
                getPathname: this.getPathname,
                getParams: this.getParams,
                getQuery: this.getQuery,
                isActive: this.isActive,
                getRoutes: this.getRoutes,
            };

            return <Component ref="component" {...this.props} {...stateMixinApi} routerState={stateMixinApi}/>;
        }
    }
}
export default RouterState;

