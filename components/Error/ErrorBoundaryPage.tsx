import React, { ErrorInfo } from 'react';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ErrorBoundaryPageState {
  hasError: boolean;
}

interface ErrorBoundaryPageProps {
    children: React.ReactNode
}

class ErrorBoundaryPage extends React.Component<ErrorBoundaryPageProps, ErrorBoundaryPageState> {
  constructor(props: ErrorBoundaryPageProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryPageState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <ErrorMessage />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundaryPage;
