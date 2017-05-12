import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpeg';
import img3 from './img/img3.jpg';

import './style.css';

class Sections extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
        <div className={classnames('Sections', className)} {...props}>
            <h1>// SECCIONES</h1>
            <div className="Sections-container">
                <div>
                    <div className="Container-img">
                        <img src={img1} alt="PERSONAJES Start Wars" />
                    </div>
                    <div className="Information">
                        <h4>// PERSONAJES</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                            <br/>
                            <Link to="/" className="Read-more">Saber más...</Link>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="Container-img">
                        <Link to="/"><img src={img2} alt="NAVES Start Wars" /></Link>
                    </div>
                    <div className="Information">
                        <h4>// NAVES</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                            <br/>
                            <Link to="/" className="Read-more">Saber más...</Link>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="Container-img">
                        <img src={img3} alt="PLANETAS Start Wars" />
                    </div>
                    <div className="Information">
                        <h4>// PLANETAS</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat.
                            <br/>
                            <Link to="/" className="Read-more">Saber más...</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Sections;
