import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import Snackbar from '@material-ui/core/Snackbar';
import { Button } from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';

import './Post.css'

class Post extends Component {
    state = {
        value: '',
        errorMessage: '',
        loading: false,
        open: false
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    onChange = (value) => {
        this.setState({ value: value });
    };

    getIp = () => {

    };

    send = (value) => {
        const url = { url: value };
        const data = { url: value, isPrivate: true }
        this.setState({ loading: true });
        var c = document.querySelector('#check');
        if (c.checked) {
            Axios.post('https://cassandraparseurl.herokuapp.com/getAllLinkedImages', data)
            .then(res => {
                if (res.data.links.length === 0)
                    throw {
                        response: {
                            data: {
                                error: "No links"
                            }
                        }
                    };   
                this.props.setLinks(res.data);
                this.props.history.push('/display');
            })
            .catch(error => {
                this.setState({ loading: false, errorMessage: error.response.data.error });
                this.handleClick();
            })
        } else {
            console.log(c.checked)
            Axios.post('https://cassandraparseurl.herokuapp.com/getAllLinkedImages', url)
            .then(res => {
                if (res.data.links.length === 0)
                    throw {
                        response: {
                            data: {
                                error: "No links"
                            }
                        }
                    };
                this.props.setLinks(res.data);
                this.props.history.push('/display');
            })
            .catch(error => {
                this.setState({ loading: false, errorMessage: error.response.data.error });
                this.handleClick();
            })
        }
        
    };

    render() {
        const { value, open, errorMessage } = this.state;
        return (
            <Router>
                <div className={'root'}>
                    <div className={'post'}>
                        <div className={'input'}>
                            <input type={'text'} onChange={({ target: { value } }) => this.onChange(value)}></input>
                            <input type="checkbox" name="check" value="check" id="check"/>Private
                        </div>
                        <div className={'button'}>
                            {
                                (this.state.loading) ?
                                    (<CircularProgress color="secondary" className={'customAnimationClass'} />) :
                                    (<Button onClick={() => this.send(value)} variant="contained" color="primary" className={'customButtonClass'} >SEND</Button>)
                            }
                            <Snackbar
                                className={'error'}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                open={open}
                                onClose={this.handleClose}
                                ContentProps={{
                                    'aria-describedby': 'message-id',
                                }}
                                autoHideDuration={3000}
                                message={<span id="message-id">{errorMessage}</span>}
                            />
                        </div>
                    </div>
                    <div className={'history'}>
                        <Button onClick={() => { this.props.history.push('/history') }} variant="contained" color="primary" className={'customButtonClass'} >
                            HISTORY
                    </Button>
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

export default connect(null, mapDispatchToProps)(Post)