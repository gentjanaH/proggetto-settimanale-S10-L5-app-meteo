import { Carousel, Container, Row } from 'react-bootstrap';
import SlideWeekMeteo from "./SlideWeekMeteo";
import { useEffect, useState } from "react";

const Carosello = function (props) {
    const [lista, setLista] = useState([])

    const getWeeklyWeather = (query) => {
        const KEY = "ed6d5230ffc307617d1abc1b080b6590"
        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query},It&appid=${KEY}&units=metric`


        fetch(URL)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }
            })
            .then((data) => {
                console.log("DATI SETTIMANALI", data)
                setLista(data.list)
            })
            .catch((err) => {

                console.log("Errore:", err)
            })
    }

    useEffect(() => {
        if (props.searchInput) {
            getWeeklyWeather(props.searchInput)
        }

    }, [props.searchInput])

    return (
        <Container fluid className="d-flex sfondo-main flex-grow-1">
            <Carousel indicators={false}>

                <Carousel.Item >

                    <Row className="ms-1">
                        <SlideWeekMeteo lista={lista.slice(0, 6)} />
                    </Row>

                </Carousel.Item>
                <Carousel.Item >

                    <Row className="ms-1">
                        <SlideWeekMeteo lista={lista.slice(6, 12)} />
                    </Row>

                </Carousel.Item>
                <Carousel.Item >

                    <Row className="ms-1">
                        <SlideWeekMeteo lista={lista.slice(12, 18)} />
                    </Row>

                </Carousel.Item>

            </Carousel>
        </Container>
    )
}

export default Carosello