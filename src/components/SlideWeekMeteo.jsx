import { useEffect } from "react";

import Carousel from 'react-bootstrap/Carousel';


const SlideWeekMeteo = function () {

    const getWeeklyWeather = () => {
        const KEY = "ed6d5230ffc307617d1abc1b080b6590"
        const URL = `https://api.openweathermap.org/data/2.5/forecast?q=Milano,It&appid=${KEY}`

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
            })
            .catch((err) => {

                console.log("Errore:", err)
            })
    }

    useEffect(() => {
        getWeeklyWeather()
    }, [])

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placebear.com/200/300"

                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placebear.com/200/300"

                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://placebear.com/200/300"

                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideWeekMeteo;