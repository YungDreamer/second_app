import React, {Component} from 'react';

export default class IFrame extends Component {
    render() {
        const url = this.props;
        const url_sliced = url.url.slice(8);
        const iframe_url = `//${url_sliced}`;
        return (
            <div>
                <iframe width="600" height="600" src={iframe_url} name="iframe"></iframe>
            </div>
        );
    }
}