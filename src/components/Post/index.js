import React, { Component } from 'react';
import Axios from 'axios';

import { Button } from '@material-ui/core';
import Input from '../Post/input.js'

import './Post.css'

import createStore from '../../store.js';
const store = createStore();


export default  class StartPage extends Component {
    //onChange={({target: {value}}) => changeValue(value)}
    state = {
        value: ''
    };
    
    onChange = (value) => {
        this.setState({value: value});
    };

    send = (value) => {
        const u2 = "http://mysmallwebpage.com/";
        const url = {
            url: "http://mysmallwebpage.com/"
          };

        Axios.post('https://cassandraparseurl.herokuapp.com/parseUrlForAdvertisements', url )
        .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(res.status);
        if (res.status === 200) document.location.href = "/display";
        })
    };

    render() { 
    const {value} = this.state;
    var action = {
        type: 'SET_LINKS',
        links: [
            'http://ggkttd.by',            
            'http://komotoz.ru/kartinki',           
            'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',          
            'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_nadpisjami/prikolnie_kartinki_s_nadpisjami_01.jpg',
        ]
      };
      store.dispatch(action)
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