import React from 'react';
import { Tab, Row, Col, ListGroup, TabContent, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = ({contStyle}) => {

    return (
        <div className='mainCont' style={contStyle}>
            <Tab.Container>
                <h3 className='d-flex justify-content-center'>Algorithm Categories</h3>
                <Tab.Container id="list-tab" defaultActiveKey="#searching-algorithm">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#searching-algorithm">
                                Searching Algorithm
                                </ListGroup.Item>
                                <ListGroup.Item action href="#sorting-algorithm">
                                Sorting Algorithm
                                </ListGroup.Item>
                                <ListGroup.Item action href="#backtracking-algorithm">
                                Backtracking Algorithm
                                </ListGroup.Item>
                                {/* You can add more tabs as needed */}
                            </ListGroup>
                        </Col>
                        <Col sm={8}>
                            <TabContent>
                                <Tab.Pane eventKey="#searching-algorithm">
                                <h5>Searching Algorithm</h5>
                                <p>
                                    Searching algorithms are used to find an element in a collection of data.
                                    Common algorithms include Linear Search and Binary Search.
                                    Explore and understand how these algorithms work step by step.
                                </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="#sorting-algorithm">
                                <h5>Sorting Algorithm</h5>
                                <p>
                                    Sorting algorithms are used to arrange elements in a specific order.
                                    Explore sorting algorithms such as Bubble Sort, Merge Sort, and Quick Sort.
                                    Visualize their operations to gain a better understanding.
                                </p>

                                </Tab.Pane>
                                <Tab.Pane eventKey="#backtracking-algorithm">
                                <h5>Backtracking Algorithm</h5>
                                <p>
                                    Backtracking algorithms are used to find solutions to optimization problems.
                                    Algorithms like Depth-First Search (DFS) often employ backtracking techniques.
                                    Dive into the world of backtracking and discover their applications.
                                </p>
                                <Link to={"/Algorithms/Maze-Solving"}>
                                    <Button variant='primary' size='md'>Explore</Button>
                                </Link>
                                </Tab.Pane>
                                {/* You can add more content for additional tabs as needed */}
                            </TabContent>
                        </Col>
                    </Row>
                </Tab.Container>
            </Tab.Container>
        </div>
    );
};

export default About;
