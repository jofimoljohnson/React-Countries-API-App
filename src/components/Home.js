import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Home.css";

function Home() {
  const navigate = useNavigate()
  const handleLogout = () =>{
    localStorage.removeItem("loggedin")
    navigate("/sign-in")
  }
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
            <Button style={{float: "right",marginTop:"10px"}}  variant="dark" onClick={handleLogout}>LOGOUT</Button>

            </div>
           <br/><br/><br/>
            <center>
                {data.map((dataObj, index) => {
                    return (
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={dataObj.flag} />
                            <Card.Body>
                                <Card.Title>{dataObj.name}</Card.Title>
                                <Card.Text>Region:{dataObj.region}</Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
            </center>
        </div>
    );
}

export default Home;
