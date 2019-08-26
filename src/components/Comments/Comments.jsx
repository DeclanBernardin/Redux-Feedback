import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class Comments extends Component {

    state = {
        comments: ''
    }

    handleBack = () => {
        this.props.history.push('/supported')
    }

    handleChangeState = (event) => {
        this.setState({
                ...this.state,
                comments : event.target.value
        })
    }

    handleAdd = () => {
        if (this.state.comments === ''){
            alert('need to comment ')
        }else{
        let action = {
            type: 'SET_COMMENTS',
            payload: this.state
        }
        this.props.dispatch(action)
        this.props.history.push('/review');
        }
    }

    render() {
        console.log(this.state);
        
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                <h1>Any comments?</h1>
                <Button onClick={this.handleBack} color="secondary">Back</Button>
                <input onChange={this.handleChangeState}></input>
                <Button onClick={this.handleAdd} color="primary">Next</Button>
            </div>
        );
    }
}

export default connect()(Comments);