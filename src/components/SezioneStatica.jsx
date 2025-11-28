import { Container, Row, Col } from "react-bootstrap"

const SezioneStatica = function () {
    return (
        <Container fluid className="sfondo-main ">
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="titolo">Benvenuti nella nostra Meteo App.</h1>
                    <h3 className="sottoTitoli">Qui troverai previsioni in tempo reale ogni giorno, a qualsiasi ora!</h3>
                </Col>

            </Row>
        </Container>
    )

}

export default SezioneStatica