import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class ReviewFeedback extends Component {

    state = { 
        feeling: this.props.reduxStore.feelingReducer.feeling,
        understanding: this.props.reduxStore.understandingReducer.understanding,
        support: this.props.reduxStore.supportedReducer.supported,
        comments: this.props.reduxStore.commentReducer.comments
    }

    //brings you back a page
    handleBack = () => {
        this.props.history.push('/comments')
    }

    //takes all the feedback and sends it to the database
    handleChange = () => {
        axios.post('/feedback', this.state )
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
        this.props.history.push('/return');
    }

    // send data to the database table 


    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                <h4>Feeling: {this.props.reduxStore.feelingReducer.feeling} </h4>
                <h4>Understanding: {this.props.reduxStore.understandingReducer.understanding}</h4>
                <h4>Support: {this.props.reduxStore.supportedReducer.supported}</h4>
                <h4>Comments: {this.props.reduxStore.commentReducer.comments} </h4>
                <Button onClick={this.handleChange} color="primary">Submit</Button>
                <Button onClick={this.handleBack} color="secondary">Back</Button>
            </div>
        );
    }
}

const feedback = (reduxStore) => {
    return {
         reduxStore
    }
}

export default connect(feedback)(ReviewFeedback);