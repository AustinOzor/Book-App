import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap'

const AddNewBook = (props) => {
    const[title, setTitle]= useState(props.bookData.title)
    const[subTitle, setSubTitle]= useState(props.bookData.subTitle)
    const[author, setAuthor]= useState(props.bookData.author)
    const[publisher, setPublisher]= useState(props.bookData.publisher)
    const[publicationDate, setPublicationDate]= useState(props.bookData.publicationDate)
    const [isbn, setIsbn] = useState(props.bookData.isbn)
   
    
    const handleEdit = (e) => {
        e.preventDefault();
        props.editBook(props.bookData.id, { title, subTitle, author, publisher, publicationDate, isbn })

        setTitle("")
        setSubTitle("")
        setAuthor("")
        setPublisher("")
        setPublicationDate("")
        setIsbn("")
        

    }
    return (
        <>
        <Form style={{ padding: "20px", backgroundColor: "#002D62", color:"white"}}>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={title}
                    onChange={(e) => {
                   setTitle(e.target.value)
                       
                    }} />
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sub Title</Form.Label>
                <Form.Control type="email" placeholder="Enter SubTitle" value={subTitle}
                  onChange={(e) => {
                   setSubTitle(e.target.value)
                       
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control type="email" placeholder="Author" value={author}
                 onChange={(e) => {
                   setAuthor(e.target.value)
                       
                    }}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Publisher</Form.Label>
                <Form.Control type="text" placeholder="Publisher" value={publisher}
                  onChange={(e) => {
                   setPublisher(e.target.value)
                       
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Publication Date</Form.Label>
                <Form.Control type="text" placeholder="Publication Date" value={publicationDate}
                 onChange={(e) => {
                   setPublicationDate(e.target.value)
                       
                    }}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ISBN</Form.Label>
                <Form.Control type="text" placeholder="ISBN" value={isbn}
                 onChange={(e) => {
                   setIsbn(e.target.value)
                       
                    }}
                />
            </Form.Group>

            <Button variant="success"  type="submit" style={{width:"100px", marginRight:"10px"}} onClick={handleEdit}>
                Save
            </Button>
         </Form>    
        </>
    );
}

export default AddNewBook;
