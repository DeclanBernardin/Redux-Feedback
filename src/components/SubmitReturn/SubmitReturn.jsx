import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SubmitReturn extends Component {

    handleChange = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                <h1>Thanks for the feedback!</h1>
                <Button onClick={this.handleChange} color="primary">Give More Feedback</Button>
            </div>
        );
    }
}

export default SubmitReturn;