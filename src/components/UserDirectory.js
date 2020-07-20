import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import Table from "./Table";
import API from "../utils/API";

class UserDirectory extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    API.list()
      .then(res => this.setState({ 
        result: res.data.results,
        users:res.data.results
      })
    ).catch(err => console.log(err));
  }

  searchUsers = query => {
    const users = this.state.users;
    const filtered = [];
    for(let i in users){
      let name = users[i].name.first.toLowerCase() + " " + users[i].name.last.toLowerCase();
      console.log("name " + name + " query " + query);
      if(name.includes(query) || users[i].email.includes(query) || users[i].cell.includes(query) || users[i].dob.date.includes(query) ){
        filtered.push(users[i])
      }
    }
    this.setState({ 
      result: filtered
    })
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.searchUsers(value)
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
        <Container>
          <Row>
            <Col size="md-12">
              <SearchForm 
                value={this.state.search}
                handleInputChange={this.handleInputChange} />
              <Table data={this.state.result}/>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default UserDirectory;
