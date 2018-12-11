import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './ArrDIsplay.css';

class ArrDisplay extends Component {
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
        setTimeout(() => {window.open(url)}, 800);
    }; 
    
    domainName = (url) => {
        let u = new URL(url);
        return u.hostname;
    };

    
    componentWillMount() {
        this.setState({
            hits: [
                'http://ggkttd.by',            
                'http://komotoz.ru/kartinki',           
                'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',          
                'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_nadpisjami/prikolnie_kartinki_s_nadpisjami_01.jpg',
                'http://ggkttd.by',            
                'http://komotoz.ru/kartinki',           
                'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',
                'http://ggkttd.by',            
                'http://komotoz.ru/kartinki',           
                'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',
                'http://ggkttd.by',            
                'http://komotoz.ru/kartinki',           
                'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',
                'http://ggkttd.by',            
                'http://komotoz.ru/kartinki',           
                'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',
                'http://ggkttd.by',            
                'http://komotoz.ru/kartinki',           
                'http://komotoz.ru/kartinki/images/prikolnie_kartinki_s_kotami/prikolnie_kartinki_s_kotami_04.jpg',
                
            ]
        })
    };

    render() {
        let { hits } = this.state;   
        hits = this.addId({hits}); 
        console.log(this.props.links);
        return (
            <Router>
                <div className="root">
                    {hits.map((hit, i) =>
                        <div key={i} className={'sidebarItem'}>
                            <Link to={`/display/${hit.id}`} onClick={() => this.redirect(hit.site)}>
                                {this.domainName(hit.site)}
                            </Link>
                        </div>
                    )}              
                </div>
            </Router>
        );
    }
}

function mapStateToProps (state) {
    return {
        links: state
    }
}

export default connect(mapStateToProps)(ArrDisplay)