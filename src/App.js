import "./App.css";
import Header from "./components/header";
import ImageBlock from "./components/home/image-block";
import OutlinedButton from "./components/outlined-button";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMeBlock from "./components/home/about-me-block";
import CompetencesBlock from "./components/home/competences-block";

function App() {
    return (
        <div className="App">
            <Header />
            <Container>
                <Row style={{ marginTop: 22 }}>
                    <Col sm={5}>
                        <ImageBlock />
                    </Col>
                    <Col sm={7}>
                        <AboutMeBlock />
                        <CompetencesBlock />
                        <div style={{ float: "left" }}>
                            <OutlinedButton text="Me Contrate" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
