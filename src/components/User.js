import React, {useState} from 'react'
import { connect } from 'react-redux';
import { Card, Col, Button, Modal,  } from 'react-bootstrap'
import EditUserForm from './EditUserForm';
import {deleteUser} from '../store/usersActions';



const User = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleDelete = (e) => {
        e.preventDefault();
        props.deleteUser(props.userInfo.id);
        
    };

   // deleteUser= user_id =>{this.props.deleteUser(user_id)}

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
                Edit User
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditUserForm 
            userInfo={props.userInfo} 
            editUser={props.editUser}
            closeModal={handleClose} />
    </Modal.Body>
    </Modal>

    <Col md='4' style={{marginBottom:'1rem'}}>
        <Card  >
            <Card.Body>
              <Card.Title>Codetrain User</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{props.userInfo.name}</Card.Subtitle>
              <Card.Text>
                <p>{props.userInfo.email}</p>
                <p>{props.userInfo.gen}</p>
              
              </Card.Text>
              <Card.Link onClick={handleShow}> <Button>Edit </Button></Card.Link>
              <Card.Link ><Button variant='danger' size='sm' onClick={handleDelete}>Delete</Button></Card.Link>
            </Card.Body>
          </Card>
          
    </Col>
    </>
  )
}

const mapDispatchToProps ={
  deleteUser: deleteUser

}
 
export default connect(null,mapDispatchToProps)(User);
 