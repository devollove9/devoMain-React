/**
 * Created by devollove9 on 2017/10/1.
 */
import React from 'react';
//import i18n from '../../library/i18n';
import loadStyle from '../../library/loadStyle'
import styles from './Home.scss';
//import messages from './Home.i18n.js';

@loadStyle(styles)
//@i18n(messages)
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.setState ={
        }
    }
    componentWillMount() {
     
    }

    componentWillUnmount() {
       
    }

    componentDidUpdate() {
 
    }
    
    render() {
        
        return (
            <div className="HomePage">
                This is Home
            </div>
        );
    }
}

export default HomePage;