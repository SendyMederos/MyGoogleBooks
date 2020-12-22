import React, { useState } from "react"
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import NavBar from "../components/NavBar";
import { Form, Input, SearchButton } from "../components/SearchForm";
import { Container, Row, Col, Wrapper } from "../components/Grid";
import SearchAPI from "../utils/SearchAPI";
import LocalAPI from "../utils/LocalAPI";

function Search() {

    const [books, setBooks] = useState([])
    const [lookingBook, setLookingBook] = useState([])



    const searchBooks = (x) => {
        SearchAPI.search(x)
            .then(res => {
                setBooks(res.data.items.map(result => (
                    {
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        description: result.volumeInfo.description,
                        link: result.volumeInfo.infoLink,
                        key: res.data.items.indexOf(result) + 1,
                    })
                ))
            }).catch(error => alert(error))
    }
    const handleInput = (event) => {
        setLookingBook(event.target.value)
    }
    const handleSearch = () => {
        searchBooks(lookingBook)
    }
    
    const saveThisBook = (book, index) => {
        LocalAPI.saveBook({
            title: book.title,
            authors: book.authors,
            description: book.description,
            image: book.image,
            link: book.link
        }).then(setBooks(books.filter(x => books.indexOf(x) !== index))
        ).catch(err => console.log(err))
        alert( book.title+ "  was added to your saved books!")
    }

    return (
        <Container>
            <NavBar />
            <Wrapper>
                <Jumbotron />
                <Container >
                    <Row>
                        <Col size="md-3  sml-6">
                            <Form >
                                <Input onChange={handleInput} />
                                <SearchButton onClick={handleSearch} />
                            </Form>
                        </Col>
                        <h5 className="ml-5">Results :</h5>
                        {books.length > 0 && books.map(book =>
                            <Card {...book} saveBook={saveThisBook}
                                show={false} index={books.indexOf(book)}
                            />)}
                    </Row>
                </Container>
            </Wrapper>
        </Container>
    );
}

export default Search;