import React, { useState, useEffect } from "react"
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Form from "../components/SearchForm";
import { Container, Row, Col } from "../components/Grid";
import SearchAPI from "../utils/SearchAPI"

function Search() {

    const [books, setBooks] = useState([])
    const [singleBook, setsingleBook] = useState({})
    
    useEffect(() => {
        searchBooks()
      }, [])

    const searchBooks = () => {
        let x = "harry potter"
        SearchAPI.search(x)
            .then(res => {setBooks(res.data.items.map(result => (
                {
                    title: result.volumeInfo.title,
                    authors: result.volumeInfo.authors,
                    image: result.volumeInfo.imageLinks.thumbnail,
                    description: result.volumeInfo.description,
                    link: result.volumeInfo.infoLink,
                    id: res.data.items.indexOf(result) + 1
                })
            )); console.log(books)}).catch(error => alert(error))
    }


    return (
        <Container>
            <NavBar />            
            <Container >
                <Row>
                    <Col size="md-3  sml-6">
                    <Form/>
                    </Col>
                    
                        {books.map(book =>
                            <Card {...book}
                        />)}
                  
                </Row>
            </Container>
        </Container>
    );
}

export default Search;