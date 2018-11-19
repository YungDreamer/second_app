import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import WeatherDisplay from '../WeatherDisplay';

export default class AlertDialog extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({open: !this.state.open});
    };

    render() {
        const {open} = this.state;
        const {inputValue} = this.props;
        return (
            <div>
                <Button onClick={this.handleClick}>Open alert dialog</Button>
                <Dialog
                    open={open}
                    onClose={this.handleClick}
                >
                    <DialogContent>
                        <WeatherDisplay cityInputValue = {inputValue}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClick} color="primary" autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

