import React, { useState, useEffect}from "react"
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/LocalAPI"

function Fav() {
   const [favBooks, setfavBooks] = useState({})

    const  setBooks = () => {
        API.getBooks()
            .then(res => setfavBooks = res)
        .catch(error => alert(error))
}
setBooks();
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