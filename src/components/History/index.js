import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

import './History.css'

class Post extends Component {
    state = {
        history: []
    };

    getHistory = () => {
        Axios.get('https://cassandraparseurl.herokuapp.com/getParseHistory')
            .then(res => {
                this.setState({history: res.data});
            })
    };

    deleteHistory = () => {
        Axios.post('ttps://cassandraparseurl.herokuapp.com/clearHistory')
    };

    componentDidMount() {
        this.getHistory();
    };

    render() {
        const { history } = this.state;
        return (
            <div className='root'>
                {
                    history.map((hist) =>
                     (
                         <div onClick={() => alert(`URL: ${hist.url}`)}>{hist.url}</div>
                     )
                )}
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