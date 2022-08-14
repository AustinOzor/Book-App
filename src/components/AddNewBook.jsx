import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap'

const AddNewBook = (props) => {
    const[title, setTitle]= useState("")
    const[subTitle, setSubTitle]= useState("")
    const[author, setAuthor]= useState("")
    const[publisher, setPublisher]= useState("")
    const[publicationDate, setPublicationDate]= useState("")
    const [isbn, setIsbn] = useState("")
   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTheBook({ title, subTitle, author, publisher, publicationDate, isbn })
    }
    return (
        <Form style={{ padding: "20px", backgroundColor: "#002D62", color:"white"}}>
            <h4 className='bg-success' style={{textAlign:"center", color:"white", padding:"10px",borderRadius:"20px"}}>Add New Books</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={title}
                    onChange={(e) => {
                   setTitle(e.target.value)
                       console.log(title)
                    }} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sub Title</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={subTitle}
                  onChange={(e) => {
                   setSubTitle(e.target.value)
                       console.log(subTitle)
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="email" placeholder="Author" value={author}
                 onChange={(e) => {
                   setAuthor(e.target.value)
                       console.log(author)
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Publisher" value={publisher}
                  onChange={(e) => {
                   setPublisher(e.target.value)
                       console.log(publisher)
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Publication Date</Form.Label>
                <Form.Control type="text" placeholder="Publication Date" value={publicationDate}
                 onChange={(e) => {
                   setPublicationDate(e.target.value)
                       console.log(publicationDate)
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ISBN</Form.Label>
                <Form.Control type="text" placeholder="ISBN" value={isbn}
                 onChange={(e) => {
                   setIsbn(e.target.value)
                       console.log(isbn)
                    }}
                />
            </Form.Group>

            <Button variant="success"  type="submit" style={{width:"100px", marginRight:"10px"}} onClick={handleSubmit}>
                Save
            </Button>
         </Form>    
        
    );
}

export default AddNewBook;
