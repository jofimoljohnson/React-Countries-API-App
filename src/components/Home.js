import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";

function Home() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate("/sign-in");
    };
    const url = "https://restcountries.com/v2/all?fields=name,region,flag";
    const [data, setData] = useState([]);

    const fetchInfo = () => {
        return fetch(url)
            .then((res) => res.json())
            .then((d) => setData(d));
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    return (
        <div className="App">
            <div>
                <Button style={{ float: "right", marginTop: "10px" }} variant="dark" onClick={handleLogout}>
                    LOGOUT
                </Button>
            </div>
            <br />
            <br />
            <br />
            <Row className="row" sm={12} md={8} lg={6} xl={3}  >
                    {data.map((dataObj, index) => {
                        return (
                           
                                <Card style={{ width: "20rem" }}  className="my-3 mx-5 p-3">
                                    <Card.Img style={{height:"200px"}} variant="top" src={dataObj.flag} />
                                    <Card.Body>
                                        <Card.Title>{dataObj.name}</Card.Title>
                                        <Card.Text>Region:{dataObj.region}</Card.Text>
                                    </Card.Body>
                                </Card>
                
                        );
                    })}
            </Row>

            
        </div>
    );
}

export default Home;
