import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());

const styles = {
  button: {
    fontSize: '100%',
    padding: '0.5em 1em',
    color: '#444',
    backgroundColor: '#E6E6E6',
    border: 'none',
    display: 'inline-block'
  }
}

const { classes } = jss.createStyleSheet(styles).attach()

class Button extends Component {
  render() {
    const { children } = this.props;
    return (
      <button className={classes.button}>{children}</button>
    )
  }
}

export {
  Button
};
