import React, {Component} from 'react';

import Input from '../Input'
import Alert from '../Alert';

import './App.css';

export default class App extends Component {
    state = {
        value: ''
    };

    onChange = (value) => {
        this.setState({value: value});
    };


    render() {
        const {value} = this.state;
        return (
            <div className="App">
                <div className="Input">
                    <Input changeValue={this.onChange} inputValue={value}/>
                </div>
                <div className="Alert">
                    <Alert inputValue={value}/>
                </div>
            </div>
        );
    }
}