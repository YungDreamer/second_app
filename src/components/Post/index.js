import React, { Component } from 'react';

import Axios from 'axios';
import { Button } from '@material-ui/core';
import Input from '../Post/input.js'

import './Post.css'


export default  class StartPage extends Component {
    //onChange={({target: {value}}) => changeValue(value)}
    state = {
        value: '',
        links: []
    };

    onChange = (value) => {
        this.setState({value: value});
    };

    send = (value) => {
        const url = {
            url: `http://mysmallwebpage.com/`
          };

        Axios.post(`https://cassandraparseurl.herokuapp.com/parseUrlForAdvertisements`, { url })
        .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if (res.status === 200) document.location.href = "/display";
        })
    };

    render() { 
    const {value} = this.state;
    return (
        <div className={'root'}>
        <div className={'post'}>
            <div className={'input'}>
               <Input changeValue={this.onChange} inputValue={value}/>
            </div>
            <div className={'button'}>
                <Button onClick={() => this.send(value)} variant="contained" color="primary">SEND</Button>
            </div>    
        </div>
        </div>
        )
    }
}    