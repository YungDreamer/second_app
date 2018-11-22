import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Redirect from '../Redirect/';

import './ArrDIsplay.css';

export default class ArrDisplay extends Component {
    state = {
        hits: [],
        images: []
    };

    makeId = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        console.log(text);
        return text;
    };

    componentWillMount() {
        this.setState({
            hits: [{
                site: 'ggkttd.by'
            }, {
                site: 'komotoz.ru/kartinki'
            }],
            images: [{
                image: 'komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg'
            }, {
                image: 'komotoz.ru/kartinki/images/prikolnie_kartinki_s_nadpisjami/prikolnie_kartinki_s_nadpisjami_01.jpg'
            }]
        })
    }
    render() {
        const { hits, images } = this.state;
        return (
            <Router>
                <div className={'root'}>
                    <div className={'sidebar'}>
                    {hits.map(hit =>
                        <div className={'sidebarItem'}>
                            <Link to={`/sample/${hit.site}`} onClick={this.timeout}>
                                <span>{hit.site}</span>
                            </Link>
                        </div>
                    )}
                    {images.map(img =>
                        <div className={'sidebarItem'}>
                            <Link to={`/sample/${img.image}`} onClick={this.timeout}>
                                <span>{img.image}</span>
                            </Link>
                        </div>
                    )}
                    </div>
                    <div className={'main'}>
                        <h1>Welcome</h1>
                        <Route path="/sample/:link" component={Redirect}/>
                    </div>
                </div>
            </Router>
        );
    }
}