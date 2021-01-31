import React from 'react';

class Error extends React.Component {
  render() {
    let className = 'error';
    if (this.props.isError) {
      className += ' error-active';
    }
    return <span className={className}>{this.props.isError}</span>;
  }
}

export default Error;
