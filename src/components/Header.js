import React from 'react';
import { sport, home, business, entertainment, health, science, technology } from '../functions/functions';

export default class Header extends React.Component {
    render() {
        return (
            <div class="container">
                <h3 >React News</h3>
                <div>
                    <button class="btn-flat waves-effect waves-teal" style={{ marginTop: "20px", focus: "" }} onClick={home}>Home</button>
                    <button class="btn-flat waves-effect waves-teal" style={{ marginTop: "20px" }} onClick={business}>Negócios</button>
                    <button class="btn-flat waves-effect waves-teal" style={{ marginTop: "20px" }} onClick={entertainment}>Entreteninmento</button>
                    <button class="btn-flat waves-effect waves-teal" style={{ marginTop: "20px" }} onClick={health}>Saúde</button>
                    <button class="btn-flat waves-effect waves-teal" style={{ marginTop: "20px" }} onClick={sport}>Sports</button>
                    <button class="btn-flat waves-effect waves-teal" style={{ marginTop: "20px" }} onClick={science}>Ciências</button>
                    <button class="btn-flat waves-effect waves-teal" style={{ marginTop: "20px" }} onClick={technology}>Tecnologia</button>
                </div>

                <a href="https://github.com/maxpaz/React-News"><img style={{ position: "absolute", top: "0", right: "0", border: "0" }} src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub" /></a>

            </div>

        );
    }
}
