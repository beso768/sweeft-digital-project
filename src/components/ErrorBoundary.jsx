import React from 'react';
import PropTypes from 'prop-types';
import { Toast } from 'react-bootstrap';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, show: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <Toast
          className="d-inline-block m-1"
          bg="danger"
          position="center"
          onClose={() => this.setState({ show: false })}
          show={this.state.show}
        >
          <Toast.Header>Something went wrong.</Toast.Header>
          <Toast.Body className="text-white">
            {this.state.error && this.state.error.toString()}
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.errorInfo.componentStack}
            </details>
          </Toast.Body>
        </Toast>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
