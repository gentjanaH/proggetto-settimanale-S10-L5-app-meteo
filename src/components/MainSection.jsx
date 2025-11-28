import { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

const MainSection = function (props) {
    const KEY = "ed6d5230ffc307617d1abc1b080b6590"
    const [dati, setDati] = useState({
        città: "",
        temperatura: "",
        min: "",
        max: "",
        dataOra: "",
        umidità: 0,
        descrizione: "",
        icona: null

    })

    const getWeather = function (query) {
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
                    umidità: res.main.humidity,
                    descrizione: res.weather[0].description,
                    icona: res.weather[0].icon
                }))
                console.log(res)
            })
            .catch((err) => {
                console.log("Errore:", err)
            })
    }

    useEffect(() => {
        if (props.searchInput) {
            getWeather(props.searchInput)
        }

    }, [props.searchInput])

    return (
        <Container fluid className="sfondo" >
            <Row className="justify-content-center">
                <Row className="my-3">

                    <Col xs={12} className="text-center">
                        <h2 className="titolo fs-1 fw-bold d-inline-block me-4 ">{dati.città}</h2>


                        {dati.icona && (
                            <img
                                src={`https://openweathermap.org/img/wn/${dati.icona}@2x.png`}
                                alt={dati.descrizione} />
                        )

                        }
                    </Col>
                </Row>

                <Col xs={6} className="text-center mb-4">
                    <h4 className="sottoTitoli">Data & Ora</h4>
                    <p className="fs-4 fw-bold dati"> {dati.dataOra}</p>
                </Col>
                <Col xs={6} className="text-center mb-4">
                    <h4 className="sottoTitoli">Descrizione</h4>
                    <p className="fs-4 fw-bold dati"> {dati.descrizione}</p>
                </Col>

                <Col xs={6} className="text-center mb-4">
                    <h4 className="sottoTitoli">Temperatura reale</h4>
                    <p className="fs-4 fw-bold dati">{dati.temperatura} °C</p>
                </Col>
                <Col xs={6} className="text-center mb-4">
                    <h4 className="sottoTitoli">Umidità</h4>
                    <p className="fs-4 fw-bold dati"> {dati.umidità} %</p>
                </Col>
                <Row>
                    <Col xs={6} className="text-center mb-4" >
                        <h4 className="sottoTitoli">Min previste</h4>
                        <p className="fs-4 fw-bold dati">{dati.min} °C</p>
                    </Col>
                    <Col xs={6} className="text-center mb-4">
                        <h4 className="sottoTitoli">Min previste</h4>
                        <p className="fs-4 fw-bold dati">{dati.max} °C</p>
                    </Col>
                </Row>




            </Row>
        </Container>
    )

}

export default MainSection