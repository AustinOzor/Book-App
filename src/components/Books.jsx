import React from 'react';
import Book from './Book'
import {Row,  Container} from 'react-bootstrap'

const Books = (props) => {
    return (
        <Container>
            
             <Row>
                 {props.bookData.map((item, index) => {
                  return (
                      <Book
                          bookData={item}
                          key={item.id}
                          editBook={props.editBook}
                          deleteBook={props.deleteBook}
                      />
                 )
                })}
             </Row>
           
           
        </Container>
    );
}

export default Books;
