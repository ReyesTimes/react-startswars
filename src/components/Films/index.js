import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './style.css';

import film_01 from './img/film_01.jpg';
import film_02 from './img/film_02.jpg';
import film_03 from './img/film_03.jpg';
import film_04 from './img/film_04.jpg';
import film_05 from './img/film_05.jpg';
import film_06 from './img/film_06.jpg';
import film_07 from './img/film_07.jpg';
import film_08 from './img/film_08.jpg';

class Films extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('Films', className)} {...props}>
            <h1>// PELÍCULAS</h1>
            <div className="Main-film">
                <div className="Container-main-film">
                    <div>
                        <h2>START WARS</h2>
                        <h3 className="title">EPISODE I: THE PHANTOM MENACE</h3>
                        <div className="Ratings">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p className="Resume"><strong>Resumen:</strong></p>
                        <p className="Description">
                        La República Galáctica está sumida en disturbios. Hay
                protestas contra la tributación de las rutas comerciales
                a sistemas estelares.
                        </p>
                        <p className="Description">
                            Esperando resolver el problema con un bloqueo de
                mortíferos cruceros, la avariciosa Federación de Comercio
                hadetenido todos los envios al pequeño planeta
                de Naboo. <Link to="/" className="Read-more">Leer màs...</Link>
                        </p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <ul className="Lists-films">
                <li>
                    <img src={film_01} alt="Start Wars" />
                </li>
                <li>
                    <img src={film_02} alt="Start Wars" />
                </li>
                <li>
                    <img src={film_03} alt="Start Wars" />
                </li>
                <li>
                    <img src={film_04} alt="Start Wars" />
                </li>
                <li>
                    <img src={film_05} alt="Start Wars" />
                </li>
                <li>
                    <img src={film_06} alt="Start Wars" />
                </li>
                <li>
                    <img src={film_07} alt="Start Wars" />
                </li>
                <li>
                    <img src={film_08} alt="Start Wars" />
                </li>
            </ul>
        </div>
    );
  }
}

export default Films;
