import React from 'react';

import axios from 'axios';

import apiKey from '../const/apiKey';

export default class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dados: [],
        }
    }

    componentDidMount() {
        axios.get('https://newsapi.org/v2/top-headlines?country=br&apiKey=' + apiKey)
            .then(res => {
                this.setState({ dados: res.data.articles });
                console.log(this.state.dados[3])
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div class="container">
                {this.state.dados.map(dados =>
                    <div class="container" style={{ marginTop: "80px" }} >
                        <div>
                            <div class="z-depth-5">
                                <div class="card">
                                    <div class="card-image">
                                        <img alt="img" src={dados.urlToImage ? dados.urlToImage : require('../img/img404.png')} />
                                    </div>
                                    <div class="card-content">
                                        <h5 >{dados.title}</h5>
                                        <p style={{ marginTop: "60px" }}>{dados.content ? dados.content : ''}</p>
                                    </div>
                                    <div class="card-action">
                                        <a href={dados.url ? dados.url : ''}>Ver completo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}