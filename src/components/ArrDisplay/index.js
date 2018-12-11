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
        return u.hostname.replace('www.', '');
    };

    componentDidMount() {
        this.setState({hits: this.props.links}, () => {
            return (this.state.hits.length === 0) ? this.props.history.push('/post') : null;
        })
    };

    render() {
        let { hits } = this.state;   
        console.log(this.props);
        hits = this.addId({ hits: this.props.links }); 
        
        return (
            <Router>
                <div className={"root"}>
                    <div className={'sidebarItems'}>
                        {hits.map((hit, i) =>
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