import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { connect } from 'react-redux';

import './ArrDIsplay.css';

class ArrDisplay extends Component {
    state = {
        hits: [],
        images: []
    };

    makeId = () => {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };

    addId = ({ hits }) => {
        return hits && hits.map((site) => {
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
        return u.hostname.replace('www.', '');
    };

    componentWillMount() {
        const { hits } = this.state;
        const { links, images } = this.props.links;
        this.setState({hits: links, images: images}, () => {
            return (hits.length === 0) ? this.props.history.push('/post') : null;
        })
    };

    render() {
        let { hits, images } = this.state; 
        hits = this.addId({ hits: this.props.links.links });
        images = this.props.links.images;
         
        return (
            <Router>
                <div className={"root"}>
                    <div className={'sidebarItems'}>
                        <div className={'sidebarLabel'}>Images:</div>
                        {
                            images && images.map((img, i) =>
                                <img key={i} src={img} alt={i} className={'sidebarItemImage'} />
                            )
                        }       
                    </div>    
                    <div className={'sidebarItems'}>
                        <div className={'sidebarLabel'}>Links:</div>
                        {hits && hits.map((hit, i) =>
                            <div key={i} className={'sidebarItem'}>
                                <Link to={`/display/${hit.id}`} onClick={() => this.redirect(hit.site)}>
                                    {this.domainName(hit.site)}
                                </Link>
                            </div>
                        )}       
                    </div>       
                </div>
            </Router>
        );
    }
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps)(ArrDisplay)