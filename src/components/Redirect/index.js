import React, {Component} from 'react';

export default class Redirect extends Component {
    getRoutingUrl =() => {
        const url = window.location.pathname;
        const newUrl = url.slice(8);
        console.log(newUrl);
        return newUrl
    };


    redirect = (url) => {
        setTimeout( () => {window.open(`http://${url}`)}, 800);
    }

    render() {
        const url = this.getRoutingUrl();
        this.redirect(url);
        return (
            <div>
                <span>You will be redirected to {url}</span>
            </div>
        );
    }
}