import React, {Component} from 'react';

import {BrowserRouter as Router, Link} from 'react-router-dom';
import IFrame from '../IFrame/';

import './ArrDIsplay.css';

export default class ArrDisplay extends Component {
    state = {
        hits: [],
        images: [],
        urlstate: ""
    };

    getRoutingUrl =() => {
        let url = window.location.pathname;
        console.log(url);
        this.setState({urlstate: window.location.pathname});
    }

    timeout = () => {
        setTimeout(this.getRoutingUrl, 1);
    }

    componentWillMount() {
        this.setState({
            hits: [{
                site: 'ggkttd.by/'
            }, {
                site: 'komotoz.ru/kartinki/'
            }]
        });
        this.setState({
            images: [{
                image: 'komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg'
            }, {
                image: 'komotoz.ru/kartinki/images/prikolnie_kartinki_s_nadpisjami/prikolnie_kartinki_s_nadpisjami_01.jpg'
            }]
        })
    }
    render() {
        const { hits } = this.state;
        const { images } = this.state;
        const { urlstate } = this.state;
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
                        <IFrame url = {urlstate}></IFrame>
                    </div>
                </div>
            </Router>
        );
    }
}