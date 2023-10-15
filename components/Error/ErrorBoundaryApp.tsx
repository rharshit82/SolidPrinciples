import React from 'react';
import styled from 'styled-components';

// components
import ErrorMessage from './ErrorMessage';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface State {
  hasError: boolean;
}

interface Props {
  children?: React.ReactNode;
}

class ErrorBoundaryApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Container>
          <ErrorMessage />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryApp;
