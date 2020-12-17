import React, { useState, useEffect } from "react"
import Card from "../components/Card";
import Jumbotron from "../components/Jumbotron";
import NavBar from "../components/NavBar";
import { Container, Row, Col, Wrapper } from "../components/Grid";
import API from "../utils/LocalAPI"
import LocalAPI from "../utils/LocalAPI";

function Fav() {

    const [favBooks, setfavBooks] = useState({})

    useEffect(() => {
        rendermyBooks()
    }, [])

    const rendermyBooks = () => {
        API.getBooks()
            .then(res => { console.log(res); setfavBooks(res.data) })
            .catch(error => alert(error))
    }
    const deletethisBook = (id) => {
        LocalAPI.deleteBook(id)
            .then(res => rendermyBooks())
            .catch(err => console.log(err));
    }

    return (
        <Container>
            <NavBar />
            <Wrapper>
                <Jumbotron />
                <Container >
                    <Row>
                        <h5 className="ml-5">Saved Books:</h5>
                        {favBooks.length > 0 && favBooks.map(book =>
                            <Card {...book}
                                show={true} deleteBook={deletethisBook}
                            />)}
                    </Row>
                </Container>
            </Wrapper>
        </Container>
    );
}

export default Fav;