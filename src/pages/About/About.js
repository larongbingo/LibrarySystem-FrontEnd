import React, { Component } from "react";
import { 
    Grid, 
    Row, 
    Col 
} from "react-bootstrap";

class AppAbout extends Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12}>
                        <h3>About this App</h3>
                        <p>This app allows our students, instructors and professors reserve books ahead of time, read thesis and dissertations and see the entire catalog of the library. At the same time, allowing our staffs announce warnings, events and call students.</p>
                        
                    </Col>
                </Row> 
                <Row>
                    <Col>
                        <h4>Dev Team</h4>
                        <ul>
                            <li>Renz Christen Yeomer A. Pagulayan</li>
                        </ul>                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Special Thanks</h4>
                        <ul>
                            <li>Angelo Borinaga - helping test the web app</li>
                            <li>Shifil Mantua - modelling for the Homepage</li>
                            <li>Noemi Estimo - modelling for the Homepage</li>
                            <li>Cherry Reyes - modelling for the Homepage</li>
                            <li>Gab Yano - modelling for the Homepage and adding new ideas to the application</li>
                            <li>Daryl Valle - modelling for the Homepage</li>
                        </ul>                    
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default AppAbout;