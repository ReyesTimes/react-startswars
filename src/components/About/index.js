import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class About extends Component {
    render() {
        const { className, ...props } = this.props;
        return (
            <div className={classnames('App', className)} {...props}>
                Hola
            </div>
        );
    }
}

export default About;
