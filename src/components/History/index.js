import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';

import { Button } from '@material-ui/core';

import './History.css'

export default class History extends Component {
    state = {
        history: []
    };

    getHistory = () => {
        Axios.get('https://cassandraparseurl.herokuapp.com/getParseHistory')
            .then(res => {
                this.setState({ history: res.data });
            })
    };

    deleteHistory = () => {
        Axios.delete('https://cassandraparseurl.herokuapp.com/clearHistory');
        window.location.reload();
    };

    componentWillMount() {
        this.getHistory();
    };

    domainName = (url) => {
        let u = new URL(url);
        return u.hostname.replace('www.', '');
    };

    render() {
        const { history } = this.state;
        return (
            <Router>
                <div className='root'>
                    <div className={'sidebarItems'}>
                        <div className={'sidebarLabel'}>History:
                        <Button onClick={this.deleteHistory} variant="contained" color="primary" className={'customButtonClass1'}>
                                DELETE HISTORY
                        </Button>
                        </div>
                        {
                            history.map((hist, i) =>
                                (
                                    <div key={i} className={'sidebarItem1'} >
                                        <a href={hist.url} target={'_blank'} >
                                        RootUrl: {this.domainName(hist.rootUrl)}<br/>
                                        Url: {this.domainName(hist.url)}
                                        </a>
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </Router>
        )
    }
}