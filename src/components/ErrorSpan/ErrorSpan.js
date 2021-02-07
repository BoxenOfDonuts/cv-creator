import React from 'react';

const Error = (props) => {

  let className = 'error';
  if (props.isError) {
    className += ' error-active';
  }
  return <span className={className}>{props.isError}</span>;
}

export default Error;
