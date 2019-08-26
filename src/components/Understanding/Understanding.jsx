import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Understanding extends Component {

    state = {
        understanding : 0
    }

    //brings you back a page
    handleBack = () => {
        this.props.history.push('/feeling')
    }

     //changes the current state
    handleChangeState = (event) => {
        this.setState({
                ...this.state,
                understanding: event.target.value
        })
    }

    //takes in feedback and dispatches it to redux
    handleChange = () => {
        if (this.state.understanding < 1) {
            alert('needs to be between 1-5 ')
        } else if (this.state.understanding > 5) {
            alert('needs to be between 1-5')
        } else {
        let action = {
            type: 'SET_UNDERSTANDING',
            payload: this.state
        }
        this.props.dispatch(action)
        this.props.history.push('/supported');
        }
    }

    render() {
        console.log(this.state.understanding);
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                <h1>How well are you understanding the material?</h1>
                <Button onClick={this.handleBack} color="secondary">Back</Button>
                <input type='number' onChange={this.handleChangeState}></input>
                <Button onClick ={this.handleChange} color = "primary">Next</Button>
            </div>
        );
    }
}

export default connect()(Understanding);