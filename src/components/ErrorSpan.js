import React from 'react';

class Error extends React.Component {
    // put error display here?
    render() {
        let className = 'error'
        if (this.props.isError) {
            className += ' error-active'
        }
        return (
            <span className={className}>error</span>
        );
    }
}

export default Error;