import React from "react"
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API"

function Fav() {

   // let newData = [];
    const  searchBooks = () => {
        let x = "harry potter"
        API.search(x)
            .then(res => res.data.items.map(result => (
                    {
                        title: result.volumeInfo.title,
                        authors: result.volumeInfo.authors,
                        image: result.volumeInfo.imageLinks.thumbnail,
                        description: result.volumeInfo.description,
                        link: result.volumeInfo.infoLink,
                        id: res.data.items.indexOf(result) + 1
                    })))
                .then(newData => console.log(newData))
        .catch(error => alert(error))
}
searchBooks();
return (
    <Container>
        <NavBar />
        <Container >
            <Row>
                <Col size="md-6">
                    <Card>

                    </Card>
                </Col>
            </Row>
        </Container>
    </Container>
);
}

export default Fav;