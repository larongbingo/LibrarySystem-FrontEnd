// Components
import React, { Component } from "react";
import BookSearchForm from "../../components/BookSearchForm/BookSearchForm";
import { 
    Grid, 
    Row, 
    Col,
    Image
} from "react-bootstrap";

// CSS
import "./AppHomepage_Styles.css";

// Images
import cvsu_lib from "./cvsu-lib-1.jpg";
import reading_1 from "./reading.jpg";
import reading_2 from "./reading-2.jpg";
import reading_3 from "./reading-3.jpg";

class PictureAndForm extends Component {
    render() {
        return (
            <div className={"black-background"}>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <Image responsive src={reading_2} />
                            <div className={"float"}>
                                <h3>CvSU Imus Library</h3>
                                <h4>Web Portal</h4>
                            </div>        
                        </Col>
                        <Col xs={10} xsOffset={1}>
                            <BookSearchForm value="" />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

class LibraryPictures extends Component {
    render() {
        return (
            <Grid>
                <Row className={"pic-padding"}>
                    <Col md={5}>
                        <Image rounded responsive src={cvsu_lib} />
                    </Col>
                    <Col md={7}>
                        <h3>Extensive Collection</h3>
                        <h4>Our library offers wide range of books for students, professors and instructors</h4>
                    </Col>
                </Row>
                <Row className={"pic-padding"}>
                    <Col md={5}>
                        <Image rounded responsive src={reading_1} />
                    </Col>
                    <Col md={7}>
                        <h3>Airconditioned Room</h3>
                        <h4>Allows our students to stay, read and study while being chill and lit af</h4>
                    </Col>
                </Row>
                <Row className={"pic-padding"}>
                    <Col md={5}>
                        <Image rounded responsive src={reading_3} />
                    </Col>
                    <Col md={7}>
                        <h3>Comfortable Seating</h3>
                        <h4>Study on our comfortable chairs and tables</h4>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

class Announcements extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h3>Announcements</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"min-body"} md={4}>
                            <h4>Web Portal is now up and running</h4>
                            <h5>Students can now read dissertations and reserve books</h5>
                        </Col>
                        <Col className={"min-body"} md={4}>
                            <h4>Web Portal is now up and running</h4>
                            <h5>Students can now read dissertations and reserve books</h5>
                        </Col>
                        <Col className={"min-body"} md={4}>
                            <h4>Web Portal is now up and running</h4>
                            <h5>Students can now read dissertations and reserve books</h5>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

class Homepage extends Component {
    render() {
        return (
            <div>
                <PictureAndForm />
                <LibraryPictures />
                <Announcements />
            </div>
        )
    }
}

export default Homepage;