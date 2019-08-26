import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class HomePage extends Component {

    handleChange = () => {
        this.props.history.push('/feeling');
    }
    

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                <Button onClick={this.handleChange} color="primary">Give Feedback</Button>
            </div>
        );
    }
}

export default HomePage;