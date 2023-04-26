import React,  { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";
import {addUser} from './store/usersActions';


class App extends Component {
 
  
 
  addNewUser = (user) => { 
    // setting the id when new user is added
    user.id = Math.random().toString()
    this.props.addUser(user)
    //({
      //... is a spread operator we using here to spread the state
      //users:[...this.state.users, user]
      // this is done to copy all the existing items in the state
      // then adds on the new user ie user
   // })
  }

  deleteUser= (id) => {
    let undeletedUsers = this.state.users.filter(user => user.id !== id);
    this.setState({
      users: undeletedUsers
    })
  }
  
  editUser = (id, updatedUser) => {
    this.setState({
      users:this.state.users.map(user => user.id === id ? updatedUser: user)
    })

  }


  render() { 
    return ( 
      <>
      <Container fluid style={{marginTop: '2rem'}}> 
        <Row>
          <Col md='4'>
            {/*passing the whole method as props to AddUserForm. NB you can pass anything as props to a component*/}
            {/*you can choose any prop name. Here we used addUser*/}
            <h4>Add User</h4>
            <AddUserForm addUser= {this.addNewUser}/>
          </Col>
          <Col >
          <h1> User Details</h1>
          <Users usersData={this.props.users} 
          deleteUser={this.deleteUser} 
          editUser={this.editUser}
            />
           
          </Col>
        </Row>

      </Container>
      </> 
     );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps ={
  addUser: addUser

}
 
export default connect(mapStateToProps, mapDispatchToProps)(App);