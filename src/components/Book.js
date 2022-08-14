import React,{useState} from 'react';
import {  Card, Col, Button, Modal } from 'react-bootstrap'
import EditBook from './EditBook'

const Book = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const handleDelete = (e) => {
    e.preventDefault()
    props.deleteBook(props.bookData.id)
  }

    return (
          <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:"center", backgroundColor:"#0070BB", color:"white", padding:"10px",borderRadius:"20px"}}>Edit Exiting Book</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <EditBook
              bookData={props.bookData}
              editBook={props.editBook}
            />
        </Modal.Body>
       
      </Modal>
        <Col md="4" >
        <Card style={{ marginBlock: '1rem',maxHeight:"20rem", width:"17rem", backgroundColor:"#0066b2", color:"white"}}>
          <Card.Body>
        
                <Card.Title>Title: {props.bookData.title}</Card.Title>
             <Card.Text>
                  <p>Sub-Title: {props.bookData.subTitle}</p>
                  <p>Author: {props.bookData.author}</p>
                  <p>Publisher:{props.bookData.publisher}</p>
                  <p>publication Date: {props.bookData.publicationDate}</p>
                  <p>ISBN:{props.bookData.isbn}</p>
            </Card.Text>
              <Button onClick={handleShow}
                variant="warning" href="#" 
                style={{ width: "100px", marginRight: "10px", color: "white" }}>Edit </Button>
              <Button onClick={handleDelete}
                variant="danger" href="#" style={{ width: "100px", marginRight: "10px" }}>Delete </Button>
          </Card.Body>
            </Card>
       </Col>
      </>
    );
}

export default Book;
