import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

import film_01 from './film_01.jpg';
import film_02 from './film_02.jpg';
import film_03 from './film_03.jpg';
import film_04 from './film_04.jpg';
import film_05 from './film_05.jpg';
import film_06 from './film_06.jpg';
import film_07 from './film_07.jpg';
import film_08 from './film_08.jpg';

class Films extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('Films', className)} {...props}>
            <h1>// PELÍCULAS</h1>
            <div>
                <div>
                    <h2>START WARS</h2>
                    <p>EPISODE I: THE PHANTOM MENACE</p>
                    <p><strong>Resumen:</strong></p>
                    <p>Esperando resolver el problema con un bloqueo de
mortíferos cruceros, la avariciosa Federación de Comercio
hadetenido todos los envios al pequeño planeta
de Naboo. <span>Leer màs...</span> </p>
                </div>
                <div>

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
