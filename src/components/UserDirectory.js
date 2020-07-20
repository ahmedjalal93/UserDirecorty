import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import List from "./List";
import SearchForm from "./SearchForm";
import Table from "./Table";
import API from "../utils/API";

class UserDirectory extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchUsers("");
  }

  searchUsers = query => {
    API.search(query)
      .then(res => this.setState({ 
        result: res.data.results
      })
    ).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    console.log(value)
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchUsers(this.state.search);
  };

  render() {
    return (
        <Container>
          <Row>
            <Col size="md-12">
              <Table data={this.state.result}/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default UserDirectory;
