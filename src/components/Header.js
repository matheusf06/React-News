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
    componentWillMount(){
        switch (window.location.href.length){
            case 31:
             this.setState({valor: 6});
                break;
            case 24:
             this.setState({valor: 1});
                break;
            case 32:
             this.setState({valor: 2});
                break;
            case 37:
             this.setState({valor: 3});
                break;
            case 30:
             this.setState({valor: 4});
                break;
            case 29:
             this.setState({valor: 5});
                break;
            case 34:
             this.setState({valor: 7});
                break;
        }
    }

    render() {
        return (
            <div style={{'padding': '1rem'}}>
                <h1 style={{'fontWeight': 'bold'}}>React News</h1>
                <>
                    <Button value={1} variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={home}>Inicio</Button>
                    <Button value={2} variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={business}>Negócios</Button>
                    <Button value={3} variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={entertainment}>Entretenimento</Button>
                    <Button value={4} variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={health}>Saúde</Button>
                    <Button value={5} variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={sport}>Esportes</Button>
                    <Button value={6} variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={science}>Ciências</Button>
                    <Button value={7} variant="outline-secondary" style={{'border':'0px', 'paddingLeft': '2.5em', 'paddingRight': '2.5em'}} onClick={technology}>Tecnologia</Button>
                </>
            </div>
        );
    }
}
