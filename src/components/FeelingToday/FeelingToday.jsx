import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class FeelingToday extends Component {

    state = {
        feeling : 0
    }

    //brings you back a page
    handleBack = () => {
        this.props.history.push('/')
    }

    //changes the current state
    handleChangeState = (event) => {
        this.setState({
                ...this.state,
                feeling: event.target.value
        })
    }

    //takes in feedback and dispatches it to redux
    handleChange = () => {
        if (this.state.feeling < 1 ) {
            alert('needs to be between 1-5 ')
        } else if (this.state.feeling > 5) {
            alert('needs to be between 1-5')
        } else {
        let action = {
            type: 'SET_FEELING',
            payload: this.state
        }
        this.props.dispatch(action)
        this.props.history.push('/understanding');
        }
    }

    render() {
        console.log(this.state.feeling);
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                <h1>How are you feeling today?</h1>
                <Button onClick= {this.handleBack} color="secondary">Back</Button>
                <input type='number' onChange={(event) => this.handleChangeState(event)}></input>
                <Button onClick={this.handleChange} color="primary">Next</Button>
            </div>
        );
    }
}

export default connect()(FeelingToday);