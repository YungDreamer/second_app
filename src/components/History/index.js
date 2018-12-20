import React, { Component } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button } from '@material-ui/core';

import './History.css'

class History extends Component {
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

    send = (value) => {
        const url = { url: value };
        Axios.post('https://cassandraparseurl.herokuapp.com/getAllLinkedImages', url)
            .then(res => {
                this.props.setLinks(res.data);
                this.props.history.push('/display');
            })
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
                                    <div key={i} className={'sidebarItem'} onClick={() => this.send(hist.rootUrl)}>
                                        {i}: {this.domainName(hist.rootUrl)}
                                    </div>
                                )
                            )}
                    </div>
                </div>
            </Router>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setLinks: payload => dispatch({ type: "SET_LINKS", payload })
    };
};

export default connect(null, mapDispatchToProps)(History)