import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './style.css';
import logo from'./logo.png';

class Header extends Component {
    render() {
        const { className, ...props } = this.props;
        return (
            <header className={classnames('Header', className)} {...props}>
                <div className="Container-flex">
                    <div className="Logo-container">
                        <Link to="/">
                            <img src={logo} alt="Start Wars" />
                        </Link>
                    </div>
                    <div className="Container-menu">
                        <div>
                        </div>
                        <nav>
                            <Link to="/about"><span>REGISTRAME</span></Link> // <Link to="/about"><span>LOGIN</span></Link>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
