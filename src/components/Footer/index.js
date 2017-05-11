import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';
import bgimg from './footer-bg.jpg';

class Footer extends Component {
    render() {
        const { className, ...props } = this.props;
        return (
            <footer className={classnames('Footer', className)} {...props}>
                <div className="Container-information">
                    <p className="Follow-text">Seguir star wars:</p>
                    <ul>
                    <li>
                    <a href="">
                    <i className="fa fa-facebook"></i>
                    </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa fa-twitter"></i>
                    </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa fa-google-plus"></i>
                    </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa fa-instagram"></i>
                    </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa fa-youtube"></i>
                    </a>
                    </li>
                    <li>
                    <a href="">
                    <i className="fa fa-tumblr"></i>
                    </a>
                    </li>
                    </ul>
                    <p className="Copyright-text">TM & © Lucasfilm Ltd. Todos los derechos reservados <br></br>
                    Términos de uso | Política de privacidad | Tienda Disney de Star Wars | Mesa de ayuda de Star Wars</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
