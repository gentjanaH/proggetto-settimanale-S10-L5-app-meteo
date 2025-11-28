

import { Card, Col } from 'react-bootstrap';


const SlideWeekMeteo = function (props) {


    return (
        <>

            {props.lista.map((item, i) => (


                <Col key={i} xs={6} md={4}>
                    <Card className="my-3 w-100 sfondo-main">
                        <Card.Body>
                            <Card.Title>
                                {new Date(item.dt_txt).toLocaleDateString()} - h
                                {new Date(item.dt_txt).toLocaleTimeString().slice(0, -3)}

                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {item.weather[0].description}
                            </Card.Subtitle>
                            <Card.Text>
                                {item.main.temp} °C <br />
                                Min: {item.main.temp_min} °C - Max: {item.main.temp_max} °C
                            </Card.Text>


                        </Card.Body>
                    </Card>
                </Col>

            ))
            }
        </>
    );
}

export default SlideWeekMeteo;