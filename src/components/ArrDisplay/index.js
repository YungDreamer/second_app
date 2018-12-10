import React, {Component} from 'react';

import {BrowserRouter as Router, Link} from 'react-router-dom';

import './ArrDIsplay.css';

export default class ArrDisplay extends Component {
    state = {
        hits: []
    };

    makeId = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };

    addId = ({ hits }) => {
        return hits.map((site) => {
            return {
            site: site,
            id: this.makeId()
            }
        })
    };

    redirect = (url) => {
        setTimeout(() => {window.open(`http://${url}`)}, 800);
    }; 
    
    domainName = (url) => {
        return url = url.split("/")[0];
    };
    
    componentWillMount() {
        this.setState({
            hits: [
                'ggkttd.by',            
                'komotoz.ru/kartinki',           
                'komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',          
                'komotoz.ru/kartinki/images/prikolnie_kartinki_s_nadpisjami/prikolnie_kartinki_s_nadpisjami_01.jpg'
            ]
        })
    };

    render() {
        let { hits } = this.state;
        console.log(hits);
         
        hits = this.addId({hits}); 
        console.log(hits);

        return (
            <Router>
                <div className={'root'}>
                    <div className={'sidebar'}>
                    {hits.map(hit =>
                        <div className={'sidebarItem'}>
                            <Link to={`/${hit.id}`} className={'test'} onClick={() => this.redirect(hit.site)}>
                                {this.domainName(hit.site)}
                            </Link>
                        </div>
                    )}                 
                    </div>
                    <div className={'main'}>
                        <h1>Welcome</h1>
                    </div>
                </div>
            </Router>
        );
    }
}