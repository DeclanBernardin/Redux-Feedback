import React, { Component } from 'react';
import axios from 'axios';

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
                            <tr>
                                <td>{this.state.admin.feeling}</td>
                                <td>{this.state.admin.understanding}</td>
                                <td>{this.state.admin.support}</td>
                                <td>{this.state.admin.comments}</td>
                                <td><button>Flag</button></td>
                                <td><button>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        );
    }
}

export default Admin;