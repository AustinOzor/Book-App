import React,{ useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Col, Row, Container  } from 'react-bootstrap'
import Books from './components/Books';
import AddNewBook from './components/AddNewBook';

function App() {
  const [books, addBook] = useState([
    {  id:"1",
      title: "Think and Grow Rich",
      subTitle:"",
      author: "Brain Tracy",
      publisher: "Taylor and Francis",
      publicationDate:"20/20/2020",
      isbn:"15898949498494"    
    },
    {  id:"2",
      title: "Gifted Hands",
      subTitle:"",
      author: "Ben Carson",
      publisher: "Taylor and Francis",
     publicationDate:"20/20/2020",
     isbn:"15898949498494"
    },
    {  id:"3",
      title: "No Excuses",
      subTitle:"",
      author: "Brain Tracey",
      publisher: "Taylor and Francis",
      publicationDate:"20/20/2020",
      isbn:"15898949498494"
    }

  ]);
  const addNewBook = (book) => {
    addBook([...books, book])
  }

  const editBook = (id, upDatedBook) => {
    addBook(books.map((book) => {
      if (book.id === id) {
        return upDatedBook
      }
      return book
    }))
  };
  const deleteBook = (id) => {
    addBook(books.filter((book) => {
      if (book.id !== id) {
        return book
      }
    }))
  }
  return (
    <div>
      <Container style={{fontFamily:"Times New Roman"}}>
        <Row style={{ marginTop: '2rem' }}>
          <Col md={4}><AddNewBook addTheBook={addNewBook} /></Col>

          <Col md={8}>
            <h3 style={{
              textAlign: "center",
              backgroundColor: "#002D62",
              color: "white",
              paddingBlock: "10px",
              
            }}>All Books</h3>
            <Books bookData={books} editBook={editBook} deleteBook={deleteBook} />
           
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;


  // {books.map((item, index) => {
  //             return (
  //                <div>
                
  //                </div>
  //             )
  //          })}
           