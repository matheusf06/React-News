import React from 'react';
import { sport, home, business, entertainment, health, science, technology } from '../functions/functions';

import Button from 'react-bootstrap/Button';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: 0,
        }
    }

    render() {
        return (
            <div style={{'padding': '1rem'}}>
                <h1 style={{'fontWeight': 'bold'}}>React News</h1>
                <>
                    <Button variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={home}>Inicio</Button>
                    <Button variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={business}>Negócios</Button>
                    <Button variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={entertainment}>Entretenimento</Button>
                    <Button variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={health}>Saúde</Button>
                    <Button variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={sport}>Esportes</Button>
                    <Button variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={science}>Ciências</Button>
                    <Button variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={technology}>Tecnologia</Button>
                </>
            </div>
        );
    }
}
