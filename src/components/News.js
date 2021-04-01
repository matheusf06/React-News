import React from 'react';
import axios from 'axios';
import apiKey from '../const/apiKey';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: [],
        }
    }

    componentDidMount() {
        axios.get(this.props.link + apiKey)
            .then(res => {
                this.setState({ dados: res.data.articles });
                console.log(this.state.dados)
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <div className="grid">
                            {this.state.dados.map(noticia =>
                                <Card key={noticia.id}>
                                    <Card.Img className="img" variant="top" src={noticia.urlToImage ? noticia.urlToImage : require('../assets/img404.png')} alt="Imagem da Notícia" />
                                    <Card.Body>
                                        <Card.Title>{noticia.title}</Card.Title>
                                        <Card.Text>
                                            {noticia.content ? noticia.content : 'Informações indisponíveis'}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">Por: {noticia.source.name}</small>
                                        <Button onClick={() => { window.open(noticia.url ? noticia.url : '') }} variant="link">Ver mais</Button>
                                    </Card.Footer>
                                </Card>
                            )}
                        </div>
                        <ScrollUpButton
                            StopPosition={0}
                            ShowAtPosition={500}
                            EasingType='easeOutCubic'
                            AnimationDuration={500}
                            ContainerClassName='ScrollUpButton__Container'
                            TransitionClassName='ScrollUpButton__Toggled'
                            style={{ 'backgroundColor': 'transparent' }}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}



