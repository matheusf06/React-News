import React from 'react';
import axios from 'axios';
import apiKey from '../const/apiKey';
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default class Sport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: [],
        }
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=br&category=sports&apiKey=' + apiKey)
            .then(res => {
                this.setState({ dados: res.data.articles });
                console.log(this.state.dados);
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <>
                {this.state.dados.map(dados =>                    
                <Card style={{'height': '45em', 'width': '20rem', 'position': 'relative', 'margin': '1em' }}>
                  <Card.Img style={{'height': '260px'}} src={dados.urlToImage ? dados.urlToImage : require('../img/img404.png')} alt="Imagem da Notícia"/>
                  <Card.Body>
                    <Card.Title>{dados.title}</Card.Title>
                    <Card.Text style={{'height': '16em'}}>
                      {dados.content ? dados.content : 'Informações indisponíveis'}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                  <Button variant="primary" href={dados.url ? dados.url : ''} style={{'': '0px'}}>Ver mais</Button>
                  </Card.Body>
                </Card>
                )}
                <ScrollUpButton
                StopPosition={0}
                ShowAtPosition={500}
                EasingType='easeOutCubic'
                AnimationDuration={500}
                ContainerClassName='ScrollUpButton__Container'
                TransitionClassName='ScrollUpButton__Toggled'
                style={{'backgroundColor': 'white'}}
                />
            </>
        );
    }
}