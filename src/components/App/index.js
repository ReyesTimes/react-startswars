import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Films from './../Films';

import './style.css';

class App extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="container">
            <h1>// NOVEDADES - Desde una galaxia lejana</h1>
            <Films></Films>
        </div>
      </div>
    );
  }
}

export default App;
