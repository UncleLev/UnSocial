import React, { Component } from "react";

import ErrorIndicator from './error-inicator';

export default class ErrorBouncer extends Component {
    state = {
        hasError: false
    }
    componentDidCatch() {
        this.setState({ hasError: true });
    }
    
    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        } else {
            return this.props.children;
        }
    }
}
