/**
 * Created by devo on 10/6/2017.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='NotFound'>
                Your Page Does Not Exist.
                <Link to='/'>GO BACK</Link>
            </div>
        )
    }
}

export default NotFound;

