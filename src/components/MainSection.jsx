import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

const MainSection = function () {
    const KEY = "ed6d5230ffc307617d1abc1b080b6590"
    const [dati, setDati] = useState({
        città: "",
        temperatura: "",
        min: "",
        max: "",
        dataOra: "",
        umidità: 0
    })

    const getWather = function (query) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${KEY}&units=metric`

        fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }

            })
            .then((res) => {
                setDati(() => ({

                    città: res.name,
                    temperatura: res.main.temp,
                    min: res.main.temp_min,
                    max: res.main.temp_max,
                    dataOra: new Date().toLocaleDateString(),
                    umidità: res.main.humidity
                }))
                console.log(res)
            })
            .catch((err) => {
                console.log("Errore:", err)
            })
    }

    useEffect(() => {
        getWather("Milan,It")
    }, [])

    return (
        <Container fluid >
            <Row className="justify-content-center">

                <Card >
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{dati.città}</Card.Title>
                        <Card.Text>
                            {dati.temperatura} °C
                            {dati.dataOra}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

            </Row>
        </Container>
    )

}

export default MainSection