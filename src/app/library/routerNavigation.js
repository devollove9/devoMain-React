/**
 * Created by devollove9 on 2017/10/1.
 */
import React from 'react';


const routerNavigation = () => {
    return ( ComposedComponent ) => class extends React.Component {
        constructor(props){
            super(props);
        }
        transitionTo( from , to ){
            from.props.history.push( to );
        }
        render() {
            let navigationMixinApi = {
                transitionTo: this.transitionTo
                //replaceWith: this.replaceWith,
                //goBack: this.goBack,
                //makePath: this.makePath,
                //makeHref: this.makeHref
            };
            return (
                <ComposedComponent {...this.props} { ...navigationMixinApi }/>
            );
        }
    }
} 

export { routerNavigation }
export default routerNavigation;