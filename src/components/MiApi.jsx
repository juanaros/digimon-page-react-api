import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Digimons() {

    const [digimones, setDigi] = useState([])
    const [buscador, setBuscador] = useState("")
    const [filtroDigi, setFiltroDigi] = useState([])

    const consultar = async() => {
        let url ='https://digimon-api.vercel.app/api/digimon/'
        let consulta = await fetch(url)
        let resultado = await consulta.json()
        setDigi(resultado)
    }

    useEffect(() => {
        consultar()
    }, [])

    useEffect(() => {
        const minusculaBuscador = buscador.toLowerCase();
        setFiltroDigi(
            digimones.filter((digimon) =>
                digimon.name.toLowerCase().includes(minusculaBuscador)
            )
        );
    }, [buscador, digimones]);

    const digimonActual = filtroDigi

    return (
        <div className="text-center">
            <h1 className="mt-5" id="search">Buscar por nombre</h1>
            <input
                type="text"
                className="form-control mx-auto w-50 mt-4"
                placeholder="Busca un digimon"
                value={buscador}
                onChange={(e) => setBuscador(e.target.value)}
            />
            <Container className="mt-5">
                <Row>
                {digimonActual.map((digimon) => (
                            <Col>
                            <Card style={{ width:'12rem'}} className="mt-3">
                            <Card.Img variant="top" src={digimon.img}/>
                            <Card.Body>
                                <Card.Title>{digimon.name}</Card.Title>
                                <Card.Text>{digimon.level}</Card.Text>
                            </Card.Body>
                            </Card>
                            </Col>
                ))}
                </Row>
            </Container>
        </div>
        
    );
}

export default Digimons;

