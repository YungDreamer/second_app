import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';
import Input from '../Post/input.js'
import CircularProgress from '@material-ui/core/CircularProgress';

import './Post.css'

class Post extends Component {
    //onChange={({target: {value}}) => changeValue(value)}
    state = {
        value: '',
        loading: false
    };
    
    onChange = (value) => {
        this.setState({value: value});
    };

    send = (value) => {
        const url = {
            url: value
        };

        this.setState({loading: true});

        Axios.post('https://cassandraparseurl.herokuapp.com/parseUrlForAdvertisements', url )
        .then(res => {
            this.props.setLinks(res.data);
            this.props.history.push('/display');
        })
        .catch(() => this.setState({loading: false}))
    };

    render() {
    const {value} = this.state;
    console.log(this.state.links)
    return (
        <div className={'root'}>
        <div className={'post'}>
            <div className={'input'}>
               <Input changeValue={this.onChange} inputValue={value} />
            </div>
            <div className={'button'}>
                {
                    (this.state.loading) ? 
                        (<CircularProgress color="secondary" className={'customAnimationClass'} />) :
                        (<Button onClick={() => this.send(value)} variant="contained" color="primary" className={'customButtonClass'} >SEND</Button>)
                }
            </div>    
        </div>
        </div>
        )
    }
}    

const mapDispatchToProps = dispatch => {
    return {
        setLinks: payload => dispatch({ type: "SET_LINKS", payload })
    };
};

export default connect(null, mapDispatchToProps)(Post)