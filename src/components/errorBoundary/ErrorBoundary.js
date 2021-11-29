import React from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';

class ErrorBoundary extends React.Component {

    state = {
        error: false
    }

    // static getDerivedStateFromError(error) {
    //     return { error: true }
    // }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return this.props.children
    }
}

export default ErrorBoundary;