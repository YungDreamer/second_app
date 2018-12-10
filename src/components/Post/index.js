import React, { Component } from 'react';

import Axios from 'axios';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';

import './Post.css'

export default  class StartPage extends Component {
    //onChange={({target: {value}}) => changeValue(value)}

    componentDidMount() {
    };

    render() { 
    return (
        <div className={'root'}>
        <div className={'post'}>
            <div className={'input'}>
                <Input
                    id="inputtest"
                    defaultValue=''
                    inputProps={{'aria-label': 'Description'}}
                
                />
            </div>
            <div className={'button'}>
                <Button href="/display" variant="contained" color="primary">SEND</Button>
            </div>    
        </div>
        </div>
        )
    }
}    