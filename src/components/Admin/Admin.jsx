import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

//page is a work in progress 
class Admin extends Component {

    state = {
        admin: []
    }

    // tells the page to go grab the info for the table on render of the page
    componentDidMount() {
        this.getAdmin();
    }

    //gets the info from the data base 
        getAdmin = () => {
        axios.get('/feedback')
            .then((response) => {
                console.log(response.data);
                this.setState({ 
                    ...this.state,
                    admin: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
       let feedbackTable = this.state.admin.map((feedback)=> {
            return(<tr><td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td><Button>Flag</Button></td>
                <td><Button color="secondary">Delete</Button></td></tr>)
            
        })

        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                    <h4><i>Don't forget it!</i></h4>
                </header>
                <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Feeling</th>
                                <th>Understanding</th>
                                <th>Supported</th>
                                <th>Comment</th>
                                <th>Flag</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {feedbackTable}
                            
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default Admin;