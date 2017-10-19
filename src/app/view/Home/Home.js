/**
 * Created by devollove9 on 2017/10/1.
 */
import React from 'react';
import i18n from '../../library/i18n';
import loadStyle from '../../library/loadStyle'
import styles from './Home.scss';
import messages from './Home.i18n';

@loadStyle(styles)
@i18n(messages)
class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state ={
        }
    }
    componentWillMount() {
     
    }

    componentWillUnmount() {
       
    }

    componentDidUpdate() {
        return false;
    }
    
    render() {
        return (
            <div className="HomePage">
                
            </div>
        );
    }
        
}

export default HomePage;