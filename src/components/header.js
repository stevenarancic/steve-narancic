import React from "react";
import { Container, Row, NavDropdown, Navbar, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import Gradient from "rgt";
import IconWithText from "./home/header/icon-with-text";

export default function Header() {
    return (
        <div
            style={{
                padding: 12,
                backgroundImage:
                    "linear-gradient(to right, rgb(132 7 159), rgb(114 17 135), rgb(127, 27, 149), rgb(80, 23, 161), rgb(32, 7, 187))",
                color: "#fff",
            }}
        >
            <Container>
                <Navbar variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Steve Narancic</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <NavDropdown
                                    title="Redes Sociais"
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="https://github.com/stevenarancic">
                                        <IconWithText
                                            icon={
                                                <Icon.Github color="#black" />
                                            }
                                            title="Github"
                                        />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.facebook.com/SteveNarancic2003/">
                                        <IconWithText
                                            icon={
                                                <Icon.Facebook color="#1B74E4" />
                                            }
                                            title="Facebook"
                                        />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.instagram.com/steve.narancic/">
                                        <IconWithText
                                            icon={<Icon.Instagram />}
                                            title="Instagram"
                                        />
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="https://www.linkedin.com/in/steve-narancic-50254720b/">
                                        <IconWithText
                                            icon={
                                                <Icon.Linkedin color="#2867B2" />
                                            }
                                            title="Linkedin"
                                        />
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#home">Currículo</Nav.Link>
                                <Nav.Link href="https://api.whatsapp.com/send?phone=5551993712339">
                                    <IconWithText
                                        icon={<Icon.Whatsapp />}
                                        title="Faça um Orçamento"
                                    />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
}
